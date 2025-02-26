import { Component } from '@angular/core';
import { CerealesComponent } from "../../shared/components/cereales/cereales.component";
import { RouterLink } from '@angular/router';

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

}
