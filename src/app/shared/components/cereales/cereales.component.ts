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

  
  precios: any = {};

  fecha: { hoy: string } = { hoy: '' }; // Propiedad para la fecha

  constructor(private cerealesService: CerealesApiService) {}
  ngOnInit(): void {
    // Obtener la fecha del día
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');  // Obtener el día y asegurarse de que tenga dos dígitos
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');  // Obtener el mes y asegurarse de que tenga dos dígitos
    const year = currentDate.getFullYear();

    this.fecha.hoy = `${day}-${month}-${year}`;  // Formato dd-mm-yyyy
    console.log(this.fecha);
    

    this.cerealesService.getPrecios().subscribe(
      data => {
        this.precios = data,
        console.log(this.precios);
        
      },
      error => console.error('Error al obtener los precios', error)
    );
  }


}
