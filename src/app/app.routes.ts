import { Routes } from '@angular/router';
import { HomeComponent } from './windows/home/home.component';
import { ContactoComponent } from './windows/contacto/contacto.component';
import { InstitucionBaseComponent } from './windows/institucion/institucion-base/institucion-base.component';
import { ServiciosBaseComponent } from './windows/servicios/servicios-base/servicios-base.component';
import { ActividadesBaseComponent } from './windows/actividades/actividades-base/actividades-base.component';

export const routes: Routes = [
    {
        path:'Inicio' , component: HomeComponent
    },
    {
        path:'Institucion' , component: InstitucionBaseComponent
    },
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
