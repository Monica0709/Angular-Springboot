import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-uploader';
  imageForm!: FormGroup;
  selectedImage!: File;
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      selectedImage: ['']
    });
  }
  uploadImage() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('image', this.selectedImage);
      this.http.post('http://localhost:8080/api/add', formData).subscribe(
      response => {
      console.log('Image uploaded successfully');
      },
      error => {
      console.error('Error occurred while uploading the image', error);
      }
      );
    }
  }
}
