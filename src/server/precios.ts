import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const DATA_FILE = path.resolve('precios.json');

export async function obtenerPrecios(): Promise<any> {
  try {
    const preciosGuardados = cargarPrecios();
    if (preciosGuardados && preciosGuardados.fecha === obtenerFechaHoy()) {
      console.log('Usando datos almacenados.');
      return preciosGuardados.precios;
    }

    console.log('Obteniendo datos de la web...');
    const precios = await scrapearPrecios();
    guardarPrecios(precios);
    return precios;
  } catch (error) {
    console.error('Error al obtener precios:', error);
    return null;
  }
}

function obtenerFechaHoy(): string {
  const hoy = new Date();
  return `${hoy.getFullYear()}-${(hoy.getMonth() + 1).toString().padStart(2, '0')}-${hoy.getDate().toString().padStart(2, '0')}`;
}

function cargarPrecios(): { fecha: string, precios: any } | null {
  if (!fs.existsSync(DATA_FILE)) return null;
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return null;
  }
}

function guardarPrecios(precios: any) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ fecha: obtenerFechaHoy(), precios }, null, 2));
}

async function scrapearPrecios(): Promise<any> {
  const url = 'https://www.cac.bcr.com.ar/es/precios-de-pizarra';
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const granos = ['trigo', 'maiz', 'girasol', 'soja', 'sorgo'];
  const precios: Record<string, string> = {};

  for (const grano of granos) {
    const selector = `.board.board-${grano} .price`;
    precios[grano] = await page.$eval(selector, el => el.textContent?.trim() || 'N/D');
  }

  await browser.close();
  return precios;
}
