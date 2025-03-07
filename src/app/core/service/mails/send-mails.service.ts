import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMailsService {

  private apiUrl = '/api/enviar-correo'; // URL relativa para que funcione en SSR

  constructor(private http: HttpClient) {}

  enviarMensaje(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}