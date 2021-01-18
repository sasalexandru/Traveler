import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../../models/restaurant";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RestaurantService} from "../../../services/restaurant/restaurant.service";

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurant = new Restaurant(null, '', '', '', '', '');
  submitted = false;
  selectedFile?: File;
  retrievedImage: any;
  message?: string;
  imageName: any;


  restaurantName?: string;
  restaurantAddress?: string;
  restaurantUrl?: string;


  constructor(private restaurantService: RestaurantService, private httpClient: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    this.onUpload();
  }
  public onFileChanged(event: any) {
    //Select FileS
    this.selectedFile = event.target.files[0];
  }
  // Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    console.log(this.restaurantName);
    console.log(this.restaurantAddress);
    console.log(this.restaurantUrl);


    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // @ts-ignore
    uploadImageData.append('restaurantName', this.restaurantName);
    // @ts-ignore
    uploadImageData.append('restaurantAddress', this.restaurantAddress);
    // @ts-ignore
    uploadImageData.append('restaurantUrl', this.restaurantUrl);


    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8091/restaurants/saveWithImage', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'You suggested successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
    this.goToRestaurant();
  }


  goToRestaurant() {
    this.router.navigate(['/restaurants']);
  }

}
