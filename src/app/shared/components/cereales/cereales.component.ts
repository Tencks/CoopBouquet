import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CerealesApiService } from '../../../core/service/banner-cereales/cereales-api.service';
import { CommonModule, ViewportScroller } from '@angular/common';


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

  
  precios: any = {};

  fecha: { hoy: string } = { hoy: '' }; // Propiedad para la fecha

  fechaFormateada = "" // Para mostrar en la UI

  constructor(private cerealesService: CerealesApiService, private viewportScroller: ViewportScroller) {}
  ngOnInit(): void {
    this.cerealesService.getPrecios().subscribe(
      (data) => {
        console.log("Datos recibidos del API:", data)

        // Asignar los precios
        this.precios = data.precios || {}

        // Formatear la fecha para mostrar en la UI (de YYYY-MM-DD a DD-MM-YYYY)
        if (data.fecha) {
          const partesFecha = data.fecha.split("-")
          if (partesFecha.length === 3) {
            this.fechaFormateada = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`
          } else {
            this.fechaFormateada = data.fecha
          }
        }

        console.log("Precios procesados:", this.precios)
        console.log("Fecha formateada:", this.fechaFormateada)
      },
      (error) => console.error("Error al obtener los precios", error),
    )
  }


  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]); // Desplaza a la parte superior
  }
}
