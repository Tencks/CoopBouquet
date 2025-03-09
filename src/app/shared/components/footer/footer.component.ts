import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop(): void {
    document.documentElement.scrollTop = 0; // Para navegadores modernos
    document.body.scrollTop = 0; // Para compatibilidad con algunos navegadores
  }

  
}