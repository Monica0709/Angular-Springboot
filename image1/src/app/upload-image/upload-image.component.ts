import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  file!: File;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    const headers = new Headers({
      'Content-Type': 'multipart/form-data'
    });

    this.http.post('api/images', formData, {
      headers: headers
    }).subscribe((res: Response) => {
      if (res.status === 200) {
        console.log('Image uploaded successfully');
      } else {
        console.log('Error uploading image');
      }
    });
  }
}
