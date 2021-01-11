import { Component, OnInit } from '@angular/core';
import {Place} from "../../models/place";

import {PlaceService} from "../../services/place/place.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {


  place = new Place(null,'','','','','');
  submitted = false;
  selectedFile?: File;
  retrievedImage: any;
  message?: string;
  imageName: any;

  placeN?: string;
  placeA?: string;
  placeD?: string;
  constructor(private placeService: PlaceService , private httpClient: HttpClient,private router: Router) { }

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
    console.log(this.placeN);
    console.log(this.placeA);
    console.log(this.placeD);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // @ts-ignore
    uploadImageData.append('placeN', this.placeN );
    // @ts-ignore
    uploadImageData.append('placeA', this.placeA );
    // @ts-ignore
    uploadImageData.append('placeD', this.placeD );

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8091/place/saveWithImage', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'You suggested succesfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
    this.goToPlace();
  }
  goToPlace() {
    this.router.navigate(['/place']);
  }

}
