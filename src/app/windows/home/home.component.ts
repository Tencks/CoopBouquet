import { Component } from '@angular/core';
import { CerealesComponent } from "../../shared/components/cereales/cereales.component";
import { RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CerealesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

  scrollToTop(): void {
    document.documentElement.scrollTop = -10; // Para navegadores modernos
    document.body.scrollTop = -10; // Para compatibilidad con algunos navegadores
  }
}