import { PhotoService } from './../photo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css'],
})
export class DisplayphotoComponent implements OnInit {
  photoUrl: string = '';
  constructor(private http: HttpClient, private photoService: PhotoService) {}

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.getPhotos().subscribe((data) => {
      this.photoUrl = data.urls.regular;
    });
  }

  onClick() {
    this.getPhoto();
  }
}
