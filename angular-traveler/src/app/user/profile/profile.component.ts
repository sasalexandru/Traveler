import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = User;
  users: User[] = [];
  message = '';

  currentUser : { id: any ;firstName: string; lastName: string; password: string; userName: string; eMail: string } = {
    id: null,
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    eMail: '',


  };

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((items: User[]) => {
      this.users = items;
    });
  }

  update(user: User) {
    this.userService.save(user).subscribe(data => {
      this.users = this.users.filter((u:User) => u.id != user.id);
      console.log(data);
      this.userService.save(user);
    })


    // this.userService.update(user);
  }


  onUpdate(){
    this.router.navigate(['/update']);
  }

  back() {
    this.router.navigate(['']);
  }
}
