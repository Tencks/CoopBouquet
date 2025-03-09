import { Component } from '@angular/core';
import { InstitucionHistoriaComponent } from "../institucion-historia/institucion-historia.component";
import { InstitucionCoopComponent } from "../institucion-coop/institucion-coop.component";
import { InstitucionConsejoComponent } from "../institucion-consejo/institucion-consejo.component";
import { InstitucionUbicacionComponent } from "../institucion-ubicacion/institucion-ubicacion.component";

@Component({
  selector: 'app-institucion-base',
  imports: [InstitucionHistoriaComponent, InstitucionCoopComponent, InstitucionConsejoComponent, InstitucionUbicacionComponent],
  templateUrl: './institucion-base.component.html',
  styleUrl: './institucion-base.component.css'
})
export class InstitucionBaseComponent {


  activo = 'historia';

  seleccionar(seccion: string) {
    this.activo = seccion;
     // Pequeño delay para esperar la animación
  setTimeout(() => {
    const container = document.querySelector('.content-container') as HTMLElement;
    const activeContent = document.querySelector('.animate-slide.active') as HTMLElement;

    if (container && activeContent) {
      container.style.height = `${activeContent.offsetHeight}px`;
    }
  }, 50);
}
}