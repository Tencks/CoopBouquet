import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CerealesApiService } from '../../../core/service/banner-cereales/cereales-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cereales',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './cereales.component.html',
  styleUrl: './cereales.component.css'
})
export class CerealesComponent implements OnInit {

  
  precios: any[] = [];

  constructor(private cerealesService: CerealesApiService) {}

  ngOnInit(): void {
    this.cerealesService.getPreciosFobHoy().subscribe(
      data => this.precios = data.posts[0],
            error => console.error('Error al obtener datos', error)
    );

  }
 


 // Función para verificar y mostrar los datos
 verificarDatos(): void {
  if (this.precios.length === 0) {
    console.log('No se encontraron datos.');
  } else {
    console.log('Datos actuales:', this.precios);
  }
}


}
