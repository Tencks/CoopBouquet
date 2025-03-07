import { Component } from '@angular/core';
import { ServiciosSemillasComponent } from "../servicios-semillas/servicios-semillas.component";
import { ServiciosBalanceadosComponent } from "../servicios-balanceados/servicios-balanceados.component";
import { ServiciosProductosQuimicosComponent } from "../servicios-productos-quimicos/servicios-productos-quimicos.component";
import { ServiciosSegurosComponent } from "../servicios-seguros/servicios-seguros.component";
import { ServiciosAsesoramientoComponent } from "../servicios-asesoramiento/servicios-asesoramiento.component";
import { ServiciosTurismoComponent } from "../servicios-turismo/servicios-turismo.component";
import { ServiciosCombustiblesComponent } from "../servicios-combustibles/servicios-combustibles.component";
import { ServiciosMedPrivadaComponent } from "../servicios-med-privada/servicios-med-privada.component";

@Component({
  selector: 'app-servicios-base',
  imports: [ServiciosSemillasComponent, ServiciosBalanceadosComponent, ServiciosProductosQuimicosComponent, ServiciosSegurosComponent, ServiciosAsesoramientoComponent, ServiciosTurismoComponent, ServiciosCombustiblesComponent, ServiciosMedPrivadaComponent],
  templateUrl: './servicios-base.component.html',
  styleUrl: './servicios-base.component.css'
})
export class ServiciosBaseComponent {

  activo2 = 'semillas';

  seleccionar(seccion: string) {
    this.activo2 = seccion;
  }
}