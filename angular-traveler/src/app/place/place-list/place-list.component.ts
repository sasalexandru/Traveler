import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Place} from "../../models/place";
import {PlaceService} from "../../services/place/place.service";



@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[] = [];
  noWrapSlides = false;
  p?: string | number;


  constructor(public placeService: PlaceService, private router: Router) {
  }


  ngOnInit(): void {
    this.placeService.getAll().subscribe((items: Place[]) => {
      this.places = items;
    });
  }

  getImage(bytea:any){
    return 'data:image/jpeg;base64,' + bytea;
  }

  List(place: Place) {
    this.places = this.places.filter((place: Place) => place.id != place.id);

  }

  gotoList() {
    this.router.navigate(['/place']);
  }




}
