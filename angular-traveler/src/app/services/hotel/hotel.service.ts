import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../../models/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private api = "http://localhost:8091/hotel";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient: HttpClient) { }
  save(hotel: Hotel): Observable<Hotel> {
    return this.httpClient.post<Hotel>(this.api, JSON.stringify(hotel), this.httpOptions);
  }

  update(hotel: Hotel): Observable<Hotel> {
    return this.httpClient.put<Hotel>(this.api , hotel.id.toString(), this.httpOptions);
  }

  getAll(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.api, this.httpOptions);
  }

  get(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.api + "/" + id.toString(), this.httpOptions);
  }

  delete(hotel: Hotel) {
    console.log('delete');
    return this.httpClient.delete(this.api + "/" + hotel.id.toString(), this.httpOptions).subscribe(() => {
    });
  }
}
