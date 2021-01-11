import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = "http://localhost:8091/user";
  private api1 = "http://localhost:8091/update";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {

  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(this.api, JSON.stringify(user), this.httpOptions);
  }



  update(user: User) {
    console.log('update')
    return this.httpClient.post(this.api1 + "/" + user.id, this.httpOptions).subscribe(() => {
    });
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api, this.httpOptions);
  }

  get(id: number): Observable<User> {
    return this.httpClient.get<User>(this.api + "/" + id.toString(), this.httpOptions);
  }

  delete(user: User) {
    console.log('delete');
    return this.httpClient.delete(this.api + "/" + user.id.toString(), this.httpOptions).subscribe(() => {
    });
  }

}
