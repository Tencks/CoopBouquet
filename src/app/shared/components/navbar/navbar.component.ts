import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]); // Desplaza a la parte superior
  }
}