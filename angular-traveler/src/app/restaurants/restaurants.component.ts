import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../models/restaurant";
import {Router} from "@angular/router";
import {RestaurantService} from "../services/restaurant/restaurant.service";


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  restaurants: Restaurant[] = [];
  p?: string | number;


  constructor(public restaurantService: RestaurantService , private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((items: Restaurant[]) => {
      this.restaurants = items;

    });
  }

  List(restaurant: Restaurant) {
    this.restaurants = this.restaurants.filter((r:Restaurant) => r.id != restaurant.id);

  }
  gotoList() {
    this.router.navigate(['/restaurants']);
  }
  onClick(restaurant: Restaurant){
    window.location.href = restaurant.restaurantUrl;
  }
  getImage(bytea:any){
    return 'data:image/jpeg;base64,' + bytea;
  }

  replaceWhiteSpace(address: string){
    let newAddress =  address.replace(/\s/g, '+');
    console.log(newAddress);
  }

}
