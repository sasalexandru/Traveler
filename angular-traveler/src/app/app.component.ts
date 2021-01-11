import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Traveler';
  traveler : string = "assets/images/logotraveler.png";
  travelerbackground : string = "assets/images/darknature.jpg"
  pic1 : string = "assets/images/darkmountain.jpg"


  constructor( private router: Router) { }

  goToVideo() {
    this.router.navigate(['/video']);
  }
}
