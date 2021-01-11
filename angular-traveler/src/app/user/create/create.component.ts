import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user = new User();
  submitted = false;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }

  add(){
    this.userService.save(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
    })
  }

  onSubmit(){
    this.submitted = true;
    this.add();
  }
}
