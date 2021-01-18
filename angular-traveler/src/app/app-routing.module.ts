import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./user/list/list.component";
import {CreateComponent} from "./user/create/create.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {HotelListComponent} from "./hotel/hotel-list/hotel-list.component";
import {PlaceListComponent} from "./place/place-list/place-list.component";
import {UpdateComponent} from "./user/update/update.component";
import {FestivalListComponent} from "./festivals/festival-list/festival-list.component";
import {HomeComponent} from "./home/home/home.component";
import {CreateFestivalComponent} from "./suggest/create-festival/create-festival.component";
import {CreateHotelComponent} from "./suggest/create-hotel/create-hotel.component";
import {CreatePlaceComponent} from "./suggest/create-place/create-place.component";
import {AboutComponent} from "./about/about.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {CreateRestaurantComponent} from "./suggest/create-restaurant/create-restaurant/create-restaurant.component";

const routes: Routes = [
  {path: 'user',  component: ListComponent},
  {path: 'register',  component: CreateComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'hotel', component: HotelListComponent },
  {path: 'place', component: PlaceListComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'festival', component: FestivalListComponent},
  {path: 'video', component: HomeComponent},
  {path: 'suggest-festival', component: CreateFestivalComponent},
  {path: 'suggest-hotel', component: CreateHotelComponent},
  {path: 'suggest-place', component: CreatePlaceComponent},
  {path: 'suggest-restaurant', component: CreateRestaurantComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
