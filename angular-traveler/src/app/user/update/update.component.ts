import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";





@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user = new User();
  users: User[] = [];
  submitted = false;



  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) {

  }


      ngOnInit(): void {

    this.userService.getAll().subscribe((items: User[]) => {
      this.users = items;
      console.log(this.router.url)
      console.log(this.users)
      console.log(this.user.id)


    });

  }

    update(user: User) {
    this.users = this.users.filter((u: User) => u.id != user.id);
    this.userService.save(user);
  }



  onUpdate(user: User) {
    console.log(this.users)
    console.log(this.user.id)
    this.update(user);
  }


  back() {
    this.router.navigate(['']);
  }
  goTo() {
    this.router.navigate(['profile']);
  }

}
