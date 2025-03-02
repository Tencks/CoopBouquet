import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CerealesApiService {

  
  private apiUrl = 'https://monitorsiogranos.magyp.gob.ar/ws/ssma/precios_fob.php';

  constructor(private http: HttpClient) {}

  // getPreciosFobHoy(): Observable<any> {
  //   const hoy = new Date();
  //   const fecha = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
  //   console.log(fecha);
    
  //   return this.http.get<any>(`${this.apiUrl}?Fecha=${fecha}`);
  // }


  getPreciosFobHoy(): Observable<any> {
    const hoy = new Date();
    const fechaHoy = `${hoy.getDate().toString().padStart(2, '0')}/${(hoy.getMonth() + 1).toString().padStart(2, '0')}/${hoy.getFullYear()}`;
    
    // Obtener la fecha del día anterior
    const ayer = new Date(hoy);
    ayer.setDate(hoy.getDate() - 1); // Restar un día
    const fechaAyer = `${ayer.getDate().toString().padStart(2, '0')}/${(ayer.getMonth() + 1).toString().padStart(2, '0')}/${ayer.getFullYear()}`;
    
    console.log('Fecha Hoy:', fechaHoy);
    console.log('Fecha Ayer:', fechaAyer);
  
    // Intentar obtener los precios de hoy
    return this.http.get<any>(`${this.apiUrl}?Fecha=${fechaHoy}`).pipe(
      // Si no se obtienen datos, hacer la consulta con la fecha de ayer
      switchMap(data => {
        if (!data || data.length === 0) {
          console.log('No se encontraron datos para hoy. Intentando con el día anterior...');
          return this.http.get<any>(`${this.apiUrl}?Fecha=${fechaAyer}`);
        }
        return of(data); // Si hay datos, retornar los resultados de hoy
      })
    );
  }
  



}
