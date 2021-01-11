import { Injectable } from '@angular/core';
import {Festival} from "../../models/festival";
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  private api = "http://localhost:8091/festival";


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient: HttpClient) { }

  save(festival: Festival): Observable<Festival> {


    return this.httpClient.post<Festival>(this.api, JSON.stringify(festival), this.httpOptions);
  }

  update(festival: Festival): Observable<Festival> {
    return this.httpClient.put<Festival>(this.api , festival.id.toString(), this.httpOptions);
  }

  getAll(): Observable<Festival[]> {
    return this.httpClient.get<Festival[]>(this.api, this.httpOptions);
  }

  get(id: number): Observable<Festival> {
    return this.httpClient.get<Festival>(this.api + "/" + id.toString(), this.httpOptions);
  }

  delete(festival: Festival) {
    console.log('delete');
    return this.httpClient.delete(this.api + "/" + festival.id.toString(), this.httpOptions).subscribe(() => {
    });
  }
}
