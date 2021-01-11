import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[] = [];


  constructor(public userService: UserService, private router: Router ) {
  }


  ngOnInit(): void {
    this.userService.getAll().subscribe((items: User[]) => {
      this.users = items;
    });
  }

  delete(user: User) {
    this.users = this.users.filter((u:User) => u.id != user.id);
    this.userService.delete(user);
  }

  gotoList() {
    this.router.navigate(['/user']);
  }

}
