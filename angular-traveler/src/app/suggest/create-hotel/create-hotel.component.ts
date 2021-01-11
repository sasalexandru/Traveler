import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {HotelService} from "../../services/hotel/hotel.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotel = new Hotel(null, '', '', '', '', '', '');
  submitted = false;
  selectedFile?: File;
  retrievedImage: any;
  message?: string;
  imageName: any;

  hotelName?: string;
  address?: string;
  hotelDescription?: string;
  hotelURL?: string;


  constructor(private hotelService: HotelService, private httpClient: HttpClient,private router: Router) {
  }

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
    console.log(this.hotelName);
    console.log(this.address);
    console.log(this.hotelDescription);
    console.log(this.hotelURL);


    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // @ts-ignore
    uploadImageData.append('hotelName', this.hotelName);
    // @ts-ignore
    uploadImageData.append('address', this.address);
    // @ts-ignore
    uploadImageData.append('hotelDescription', this.hotelDescription);
    // @ts-ignore
    uploadImageData.append('hotelUrl', this.hotelURL);


    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8091/hotel/saveWithImage', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'You suggested successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
    this.goToHotel();
  }
  goToHotel() {
    this.router.navigate(['/hotel']);
  }
}
