import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {Router} from "@angular/router";
import {HotelService} from "../../services/hotel/hotel.service";
import {DomSanitizer} from "@angular/platform-browser";






@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})


export class HotelListComponent implements OnInit {

  hotels: Hotel[] = [];
  p?: string | number;
  address: string = "Str . Ciocarliei 47 , Cluj-Napoca";
  addressList: string[];




  trustedUrl: string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCxGFSxwWPA45GzvGZxSK2KlKD_AI7vK6c&q=" ;



  constructor(public hotelService: HotelService , private router: Router , private sanitizer: DomSanitizer) {
     sanitizer.bypassSecurityTrustUrl(this.trustedUrl);
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
    return this.sanitizer.bypassSecurityTrustUrl(newAddress);
    console.log(newAddress);
  }


}
