import { Component, OnInit } from '@angular/core';

import {Festival} from "../../models/festival";
import {FestivalService} from "../../services/festival/festival.service";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {

  festivals: Festival[] = [];
  images: any[] = [];
  imageName: any;
  p?: string| number;


  constructor(private festivalService: FestivalService, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.festivalService.getAll().subscribe((items: Festival[]) => {
      this.festivals = items;

    });
  }
  List(festival: Festival) {
    this.festivals = this.festivals.filter((f:Festival) => f.id != festival.id);
  }

  getImage(bytea:any){
    return 'data:image/jpeg;base64,' + bytea;
  }



}
