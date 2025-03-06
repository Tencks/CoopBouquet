import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CerealesApiService {

  
  // private apiUrl = 'https://monitorsiogranos.magyp.gob.ar/ws/ssma/precios_fob.php';

  private apiUrl = '/api/precios';

  constructor(private http: HttpClient) {}


  getPrecios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  




}
