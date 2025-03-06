// import fs from 'fs';
// import path from 'path';
// import puppeteer from 'puppeteer';

// const DATA_FILE = path.resolve('precios.json');

// export async function obtenerPrecios(): Promise<any> {
//   try {
//     const preciosGuardados = cargarPrecios();
//     if (preciosGuardados && preciosGuardados.fecha === obtenerFechaHoy()) {
//       console.log('Usando datos almacenados.');
//       return preciosGuardados.precios;
//     }

//     console.log('Obteniendo datos de la web...');
//     const precios = await scrapearPrecios();
//     guardarPrecios(precios);
//     return precios;
//   } catch (error) {
//     console.error('Error al obtener precios:', error);
//     return null;
//   }
// }

// function obtenerFechaHoy(): string {
//   const hoy = new Date();
//   return `${hoy.getFullYear()}-${(hoy.getMonth() + 1).toString().padStart(2, '0')}-${hoy.getDate().toString().padStart(2, '0')}`;
// }

// function cargarPrecios(): { fecha: string, precios: any } | null {
//   if (!fs.existsSync(DATA_FILE)) return null;
//   try {
//     return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
//   } catch {
//     return null;
//   }
// }

// function guardarPrecios(precios: any) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify({ fecha: obtenerFechaHoy(), precios }, null, 2));
// }

// async function scrapearPrecios(): Promise<any> {
//   const url = 'https://www.cac.bcr.com.ar/es/precios-de-pizarra';
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: 'domcontentloaded' });

//   const granos = ['trigo', 'maiz', 'girasol', 'soja', 'sorgo'];
//   const precios: Record<string, string> = {};

//   for (const grano of granos) {
//     const selector = `.board.board-${grano} .price`;
//     precios[grano] = await page.$eval(selector, el => el.textContent?.trim() || 'N/D');
//   }

//   await browser.close();
//   return precios;
// }


////////////////////////////////////////////////////////////////////////////////////////////

// import fs from 'fs';
// import path from 'path';
// import puppeteer from 'puppeteer';

// const DATA_FILE = path.resolve('precios.json');

// export async function obtenerPrecios(): Promise<any> {
//   try {
//     const preciosGuardados = cargarPrecios();
//     if (preciosGuardados && preciosGuardados.fecha === obtenerFechaHoy()) {
//       console.log('Usando datos almacenados.');
//       return preciosGuardados;
//     }

//     console.log('Obteniendo datos de la web...');
//     const precios = await scrapearPrecios();
//     guardarPrecios(precios);
//     return precios;
//   } catch (error) {
//     console.error('Error al obtener precios:', error);
//     return null;
//   }
// }



// function obtenerFechaHoy(): string {
//     const hoy = new Date();
//     return `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
//   }
  

// function cargarPrecios(): { fecha: string, precios: any } | null {
//   if (!fs.existsSync(DATA_FILE)) return null;
//   try {
//     return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
//   } catch {
//     return null;
//   }
// }

// function guardarPrecios(datos: { fecha: string, precios: Record<string, string> }) {
//   fs.writeFileSync(DATA_FILE, JSON.stringify(datos, null, 2));
// }

// async function scrapearPrecios(): Promise<{ fecha: string, precios: Record<string, string> }> {
//   const url = 'https://www.cac.bcr.com.ar/es/precios-de-pizarra';
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: 'domcontentloaded' });

//   const granos = ['trigo', 'maiz', 'girasol', 'soja', 'sorgo'];
//   const precios: Record<string, string> = {};

//   for (const grano of granos) {
//     const selector = `.board.board-${grano} .price`;
//     try {
//       precios[grano] = await page.$eval(selector, el => el.textContent?.trim() || 'N/D');
//     } catch {
//       precios[grano] = 'N/D'; // Si no encuentra el precio, asigna "N/D"
//     }
//   }

//   // Extraer la fecha del encabezado dentro de la clase "board-prices"
//   let fechaPublicada = 'Fecha no encontrada';
//   try {
//     fechaPublicada = await page.$eval(
//       '.board-prices h3',
//       el => el.textContent?.replace(/\D*(\d{2}\/\d{2}\/\d{4})\D*/, '$1') || 'Fecha no encontrada'
//     );
//   } catch (error) {
//     console.warn('No se pudo extraer la fecha de la página.');
//   }

//   await browser.close();

//   return { fecha: fechaPublicada, precios };
// }


/////////////////////////////////////////////////////////////////////////////


import fs from "fs"
import path from "path"
import puppeteer from "puppeteer"

// Rutas a los archivos de caché
const DATA_FILE = path.resolve("precios.json")
const FECHA_CONSULTA_FILE = path.resolve("fecha_consulta.json")

/**
 * Función principal para obtener precios
 * Implementa una estrategia optimizada para minimizar consultas a la web
 */
export async function obtenerPrecios(): Promise<any> {
  try {
    // Obtener la fecha actual
    const fechaHoy = obtenerFechaHoy()
    console.log("Fecha hoy:", fechaHoy)

    // Cargar datos guardados
    const preciosGuardados = cargarPrecios()
    const fechaConsulta = cargarFechaConsulta()

    // Logs de depuración
    console.log("Datos de precios guardados:", preciosGuardados ? "Sí" : "No")
    console.log("Datos de fecha de consulta:", fechaConsulta ? "Sí" : "No")

    // CASO 1: Si ya consultamos hoy, usamos la información que tenemos
    if (fechaConsulta && fechaConsulta.fechaConsulta === fechaHoy) {
      console.log("Ya consultamos hoy. Usando información almacenada.")

      // Si la fecha de la web no ha cambiado, usamos los precios guardados
      if (preciosGuardados && preciosGuardados.fecha === fechaConsulta.fechaWeb) {
        console.log("La fecha de la web no ha cambiado. Usando precios guardados.")
        return {
          precios: preciosGuardados.precios,
          fecha: preciosGuardados.fecha,
        }
      }

      // Si la fecha de la web cambió pero ya la consultamos hoy, usamos los precios actualizados
      if (fechaConsulta.preciosActualizados) {
        console.log("Usando precios actualizados de hoy.")
        return {
          precios: fechaConsulta.precios,
          fecha: fechaConsulta.fechaWeb,
        }
      }
    }

    // CASO 2: No hemos consultado hoy, necesitamos verificar la web
    console.log("No hemos consultado hoy o necesitamos verificar la web.")

    // Obtener solo la fecha de la web
    const fechaWeb = await obtenerSoloFechaWeb()
    console.log("Fecha obtenida de la web:", fechaWeb)

    // Si no pudimos obtener la fecha de la web, usamos datos guardados como fallback
    if (!fechaWeb) {
      console.warn("No se pudo obtener la fecha de la web.")
      if (preciosGuardados) {
        console.log("Usando datos guardados como fallback.")
        return {
          precios: preciosGuardados.precios,
          fecha: preciosGuardados.fecha,
        }
      }
      return {
        precios: null,
        fecha: fechaHoy,
      }
    }

    // Guardar que consultamos hoy
    guardarFechaConsulta(fechaHoy, fechaWeb, false, null)

    // Si la fecha de la web es igual a la fecha guardada, usamos los datos guardados
    if (preciosGuardados && fechaWeb === preciosGuardados.fecha) {
      console.log("La fecha de la web coincide con la fecha guardada. Usando datos almacenados.")
      return {
        precios: preciosGuardados.precios,
        fecha: preciosGuardados.fecha,
      }
    }

    // CASO 3: La fecha de la web es diferente, hacemos scraping completo
    console.log("La fecha de la web es diferente. Obteniendo datos actualizados...")
    const { precios, fecha } = await scrapearPrecios()

    // Guardar los nuevos datos
    guardarPrecios(precios, fecha)

    // Actualizar el registro de consulta con los precios nuevos
    guardarFechaConsulta(fechaHoy, fecha, true, precios)

    return {
      precios: precios,
      fecha: fecha,
    }
  } catch (error) {
    console.error("Error al obtener precios:", error)

    // Si hay un error pero tenemos datos guardados, los devolvemos como fallback
    const datosGuardados = cargarPrecios()
    if (datosGuardados) {
      console.log("Error al obtener datos nuevos. Usando datos almacenados como fallback.")
      return {
        precios: datosGuardados.precios,
        fecha: datosGuardados.fecha,
      }
    }

    return {
      precios: null,
      fecha: obtenerFechaHoy(),
    }
  }
}

/**
 * Obtiene solo la fecha de la web sin hacer scraping completo
 */
async function obtenerSoloFechaWeb(): Promise<string | null> {
  const url = "https://www.cac.bcr.com.ar/es/precios-de-pizarra"
  let browser = null

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 })

    // Obtener solo la fecha desde el h3
    const fechaWeb = await page.$eval(".board-prices h3", (h3) => {
      const texto = h3.textContent?.trim() || ""
      const fechaCoincidencia = texto.match(/\d{2}\/\d{2}\/\d{4}/)
      return fechaCoincidencia ? fechaCoincidencia[0] : ""
    })

    if (!fechaWeb) {
      console.warn("No se pudo obtener la fecha de la web")
      return null
    }

    // Convertir la fecha al formato YYYY-MM-DD
    return convertirFechaAFormatoGuardar(fechaWeb)
  } catch (error) {
    console.error("Error al obtener fecha de la web:", error)
    return null
  } finally {
    if (browser) await browser.close()
  }
}

/**
 * Carga la información de la última consulta
 */
function cargarFechaConsulta(): {
  fechaConsulta: string
  fechaWeb: string
  preciosActualizados: boolean
  precios: any | null
} | null {
  if (!fs.existsSync(FECHA_CONSULTA_FILE)) return null

  try {
    return JSON.parse(fs.readFileSync(FECHA_CONSULTA_FILE, "utf8"))
  } catch (error) {
    console.error("Error al leer el archivo de fecha de consulta:", error)
    return null
  }
}

/**
 * Guarda la información de la consulta actual
 */
function guardarFechaConsulta(
  fechaConsulta: string,
  fechaWeb: string,
  preciosActualizados: boolean,
  precios: any | null,
): void {
  try {
    fs.writeFileSync(
      FECHA_CONSULTA_FILE,
      JSON.stringify(
        {
          fechaConsulta,
          fechaWeb,
          preciosActualizados,
          precios,
        },
        null,
        2,
      ),
    )
    console.log("Fecha de consulta guardada correctamente.")
  } catch (error) {
    console.error("Error al guardar fecha de consulta:", error)
  }
}

/**
 * Obtiene la fecha actual en formato YYYY-MM-DD
 */
function obtenerFechaHoy(): string {
  const hoy = new Date()
  return `${hoy.getFullYear()}-${(hoy.getMonth() + 1).toString().padStart(2, "0")}-${hoy.getDate().toString().padStart(2, "0")}`
}

/**
 * Carga los precios almacenados en el archivo JSON
 */
function cargarPrecios(): { fecha: string; precios: any } | null {
  if (!fs.existsSync(DATA_FILE)) return null

  try {
    const datos = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"))
    return datos
  } catch (error) {
    console.error("Error al leer el archivo de precios:", error)
    return null
  }
}

/**
 * Guarda los precios y la fecha en el archivo JSON
 */
function guardarPrecios(precios: any, fecha: string): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ fecha, precios }, null, 2))
    console.log("Datos de precios guardados correctamente.")
  } catch (error) {
    console.error("Error al guardar precios:", error)
  }
}

/**
 * Realiza el scraping de la página web para obtener los precios actualizados
 */
async function scrapearPrecios(): Promise<{ precios: any; fecha: string }> {
  const url = "https://www.cac.bcr.com.ar/es/precios-de-pizarra"
  let browser = null

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Para mayor compatibilidad
    })

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 })

    // Lista de granos a obtener
    const granos = ["trigo", "maiz", "girasol", "soja", "sorgo"]
    const precios: Record<string, string> = {}

    // Obtener precio de cada grano
    for (const grano of granos) {
      try {
        const selector = `.board.board-${grano} .price`
        precios[grano] = await page.$eval(selector, (el) => el.textContent?.trim() || "N/D")
      } catch (error) {
        console.error(`Error al obtener precio de ${grano}:`, error)
        precios[grano] = "N/D"
      }
    }

    // Obtener la fecha desde el h3 dentro del div con la clase "board-prices"
    const fechaWeb = await page.$eval(".board-prices h3", (h3) => {
      const texto = h3.textContent?.trim() || ""
      const fechaCoincidencia = texto.match(/\d{2}\/\d{2}\/\d{4}/)
      return fechaCoincidencia ? fechaCoincidencia[0] : ""
    })

    // Si no se pudo obtener la fecha de la web, usar la fecha actual
    if (!fechaWeb) {
      console.warn("No se pudo obtener la fecha de la web, usando fecha actual.")
      return { precios, fecha: obtenerFechaHoy() }
    }

    // Convertir la fecha al formato YYYY-MM-DD para comparar con obtenerFechaHoy()
    const fechaFormateada = convertirFechaAFormatoGuardar(fechaWeb)

    return { precios, fecha: fechaFormateada }
  } catch (error) {
    console.error("Error durante el scraping:", error)
    throw error
  } finally {
    // Cerrar el navegador si está abierto
    if (browser) await browser.close()
  }
}

/**
 * Convierte una fecha del formato DD/MM/YYYY a YYYY-MM-DD
 */
function convertirFechaAFormatoGuardar(fecha: string): string {
  try {
    const partes = fecha.split("/")
    if (partes.length !== 3) {
      throw new Error(`Formato de fecha inválido: ${fecha}`)
    }
    // Asegurarse de que partes[0] es día, partes[1] es mes y partes[2] es año
    return `${partes[2]}-${partes[1]}-${partes[0]}`
  } catch (error) {
    console.error("Error al convertir fecha:", error)
    // En caso de error, devolver la fecha actual
    return obtenerFechaHoy()
  }
}

