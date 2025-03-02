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
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]); // Desplaza a la parte superior
  }
}