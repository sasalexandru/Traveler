import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreateComponent} from "./user/create/create.component";
import {ListComponent} from "./user/list/list.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {HotelListComponent} from "./hotel/hotel-list/hotel-list.component";
import {PlaceListComponent} from "./place/place-list/place-list.component";
import {UpdateComponent} from "./user/update/update.component";
import {FestivalListComponent} from "./festivals/festival-list/festival-list.component";
import {HomeComponent} from "./home/home/home.component";
import {CreateFestivalComponent} from "./suggest/create-festival/create-festival.component";
import {CreateHotelComponent} from "./suggest/create-hotel/create-hotel.component";
import {CreatePlaceComponent} from "./suggest/create-place/create-place.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    ProfileComponent,
    HotelListComponent,
    PlaceListComponent,
    UpdateComponent,
    FestivalListComponent,
    HomeComponent,
    CreateFestivalComponent,
    CreateHotelComponent,
    CreatePlaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
