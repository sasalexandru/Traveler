import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hotel} from "../../models/hotel";
import {Observable} from "rxjs";
import {Restaurant} from "../../models/restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private api = "http://localhost:8091/restaurants";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient: HttpClient) { }

  save(restaurant: Restaurant): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(this.api, JSON.stringify(restaurant), this.httpOptions);
  }

  update(restaurant: Restaurant): Observable<Restaurant> {
    return this.httpClient.put<Restaurant>(this.api , restaurant.id.toString(), this.httpOptions);
  }

  getAll(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.api, this.httpOptions);
  }

  get(id: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(this.api + "/" + id.toString(), this.httpOptions);
  }

  delete(restaurant: Restaurant) {
    console.log('delete');
    return this.httpClient.delete(this.api + "/" + restaurant.id.toString(), this.httpOptions).subscribe(() => {
    });
  }

}
