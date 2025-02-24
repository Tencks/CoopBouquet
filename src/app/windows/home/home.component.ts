import { Component } from '@angular/core';
import { CerealesComponent } from "../../shared/components/cereales/cereales.component";

@Component({
  selector: 'app-home',
  imports: [
    CerealesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
