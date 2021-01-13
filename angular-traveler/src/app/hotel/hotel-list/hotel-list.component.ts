import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {Router} from "@angular/router";
import {HotelService} from "../../services/hotel/hotel.service";






@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})


export class HotelListComponent implements OnInit {

  hotels: Hotel[] = [];
  p?: string | number;



  constructor(public hotelService: HotelService , private router: Router) {

  }

  ngOnInit(): void {
    this.hotelService.getAll().subscribe((items: Hotel[]) => {
      this.hotels = items;

    });
  }

  List(hotel: Hotel) {
    this.hotels = this.hotels.filter((h:Hotel) => h.id != hotel.id);

  }
  gotoList() {
    this.router.navigate(['/hotel']);
  }
  onClick(hotel: Hotel){
    window.location.href = hotel.hotelUrl;
  }
  getImage(bytea:any){
    return 'data:image/jpeg;base64,' + bytea;
  }

  replaceWhiteSpace(address: string){
    let newAddress =  address.replace(/\s/g, '+');
    console.log(newAddress);
  }


}
