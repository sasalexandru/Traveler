import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../../models/place";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private api = "http://localhost:8091/place";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {

  }

  save(place: Place): Observable<Place> {
    return this.httpClient.post<Place>(this.api, JSON.stringify(place), this.httpOptions);
  }

  update(place: Place): Observable<Place> {
    return this.httpClient.put<Place>(this.api , place.id.toString(), this.httpOptions);
  }

  getAll(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(this.api, this.httpOptions);
  }

  get(id: number): Observable<Place> {
    return this.httpClient.get<Place>(this.api + "/" + id.toString(), this.httpOptions);
  }

  delete(place: Place) {
    console.log('delete');
    return this.httpClient.delete(this.api + "/" + place.id.toString(), this.httpOptions).subscribe(() => {
    });
  }
}
