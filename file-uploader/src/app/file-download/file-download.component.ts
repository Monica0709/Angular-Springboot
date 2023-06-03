import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FormBuilder, FormGroup } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent{
  selectedFile!: File;
  selectedId!: number;
  constructor(private fileService: FileService,private sanitizer: DomSanitizer,private http:HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  generateDownloadLink(fileUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(fileUrl);
  }
  saveEmployee(){
  const imageInput = document.getElementById('employeeImage') as HTMLInputElement;
  const file: File = (imageInput.files as FileList)[0];
  
  const formData = new FormData();
  formData.append('image', file);

  this.fileService.createEmployee(formData).subscribe(
    (data: any) => {
      console.log(data);
    },
    (error: any) => {
      console.log(error); 
    }
  );
  }
}
