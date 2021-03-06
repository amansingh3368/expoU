import { Component, OnInit, NgModule, OnChanges } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import * as $ from 'jquery';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { Observable, Timestamp } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { NotificationServicesService } from 'src/app/shared/services/notification-services.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface Image { id: string; imagePath: string; imageURL: string; imageName: string; maintTs: number; userId: any}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  gallery : any[];
  title = 'app';
  myForm: FormGroup;
  imageNm: string;
  imgPath: string;
  private imagesCollection: AngularFirestoreCollection<Image>;
  images: Observable<Image[]>;
  modalImage: any;
  // main task
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(public fb: FormBuilder,
              public afStorage: AngularFireStorage,
              public afs: AngularFirestore,
              public galleryService: GalleryService,
              public authData: AuthService
  ) { 
    // setTimeout(async () => {
    //   // console.log("function Running");
    //   this.gallery=await this.galleryService.getGallery(false); 
    //   // console.log(JSON.stringify(this.gallery));
    // }, 0);
   }
  

  ngOnInit() {
    this.createForm();
    this.loadImages();
  }
 
  createForm() {
    this.myForm = this.fb.group({
      imageName: '',
      imageAvatar: null
    });
  }

  onUploadBtnClick() {
    if (this.imageNm === undefined) {
    } else {
      $('#imageFile').click();
    }

  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files &&
      event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        $('#preview')
        .attr('src', URL.createObjectURL(event.target.files[0]));
      };
      this.startUpload(event.target.files);

    }
  }


  startUpload(event: FileList) {
    // File object
    const file = event.item(0);
    console.log(file);

    // client side validation
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type!');
    }

    // storage path
    this.imgPath = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.afStorage.ref(this.imgPath);

    // optional metadata
    const customMetadata = { app: 'Angular-FireBase-Gallery'};
    // main task
    this.task = this.afStorage.upload(this.imgPath, file, { customMetadata });

    this.afStorage.upload(this.imgPath, file, { customMetadata });
    // observe percentage changes
    this.uploadProgress = this.task.percentageChanges();
    // get notified when the download URL is available
    this.task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          // The above step returns an observable which can be subscribed to fetch the data within it
          this.downloadURL.subscribe(data => {
            // to create an id for the document.
            const id = this.afs.createId();
            // storing downloadURL as imageURL
            const imageURL = data;
            // storing image path in firestore
            const imagePath = this.imgPath;
            // Image name fetched from ngModel on 'imageNm' field
            const imageName = this.imageNm;
            // To store timestamp of the image before being inserted in firestore
            const maintTs = Date.now();

            const userId=this.authData.userData.uid;
            const image: Image = { id, imagePath, imageURL, imageName, maintTs, userId };
            // image object inserted in image collection (AngularFirestoreCollection)
            this.imagesCollection.doc(id).set(image);
            // setting the image name back to blank
            this.imageNm = '';
          });

        })
     ).subscribe();
  }
  loadImages() {
    this.imagesCollection = this.afs.collection<Image>('images', ref => ref.orderBy('maintTs', 'desc'));
    this.images = this.imagesCollection.valueChanges();
  }
}
