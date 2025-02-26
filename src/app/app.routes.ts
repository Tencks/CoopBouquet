import { Routes } from '@angular/router';
import { HomeComponent } from './windows/home/home.component';
import { ContactoComponent } from './windows/contacto/contacto.component';
import { InstitucionBaseComponent } from './windows/institucion/institucion-base/institucion-base.component';
import { ServiciosBaseComponent } from './windows/servicios/servicios-base/servicios-base.component';
import { ActividadesBaseComponent } from './windows/actividades/actividades-base/actividades-base.component';
import { InstitucionCoopComponent } from './windows/institucion/institucion-coop/institucion-coop.component';

export const routes: Routes = [
    {
        path:'Inicio' , component: HomeComponent
    },
    {
        path:'Institucion' , component: InstitucionBaseComponent
    },
    // {
    //     path:'cooperativa' , component: InstitucionCoopComponent
    // },
    {
        path:'Servicios' , component: ServiciosBaseComponent
    },
    {
        path:'Actividades' , component: ActividadesBaseComponent
    },
    {
        path:'Contacto' , component: ContactoComponent
    },
    {
        path:'', redirectTo:'Inicio', pathMatch:'full'
    }
];
