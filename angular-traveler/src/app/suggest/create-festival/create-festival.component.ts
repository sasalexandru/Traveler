import { Component, OnInit } from '@angular/core';
import {Festival} from "../../models/festival";
import {FestivalService} from "../../services/festival/festival.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";




@Component({
  selector: 'app-create-festival',
  templateUrl: './create-festival.component.html',
  styleUrls: ['./create-festival.component.css']
})
export class CreateFestivalComponent implements OnInit {

  festival = new Festival(null,'','','');
  submitted = false;
  selectedFile?: File;
  retrievedImage: any;
  message?: string;
  imageName: any;

  festivalN?: string;
  festivalD?: string;


  constructor(private festivalService: FestivalService, private httpClient: HttpClient,private router: Router) { }

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
    console.log(this.festivalN);
    console.log(this.festivalD);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // @ts-ignore
    uploadImageData.append('festivalN', this.festivalN );
    // @ts-ignore
    uploadImageData.append('festivalD', this.festivalD );

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8091/festival/saveWithImage', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'You suggested succesfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
    this.goToFestival();
  }

  goToFestival() {
    this.router.navigate(['/festival']);
  }

}
