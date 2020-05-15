import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as $ from 'jquery';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imgPath: string;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  imageURL: string;
  constructor(public authService: AuthService, public afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  // check(){
  //   console.log(this.authService.userData.photoURL);
  // }

  updateDp(){
    // console.log("hello");
    // $('#imageFile').click();
  }
  
  onFileChange(event){
  //   const reader = new FileReader();
  //   if (event.target.files &&
  //     event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       $('#preview').attr('src', URL.createObjectURL(event.target.files[0]));
  //       // console.log(URL.createObjectURL(file));
  //     };
  //     this.startUpload(event.target.files);
  // }
  }
  // startUpload(event: FileList) {
  //   // File object
  //   const file = event.item(0);
  //   // storage path

  //   this.imgPath = `test/${new Date().getTime()}_${file.name}`;
  //   const fileRef = this.afStorage.ref(this.imgPath);
    
  //   // optional metadata
  //   const customMetadata = { app: 'Angular-FireBase-Gallery'};
   
  //   // main task
  //   this.task = this.afStorage.upload(this.imgPath, file, { customMetadata });

  //   this.afStorage.upload(this.imgPath, file, { customMetadata });
   
  //   // get notified when the download URL is available
  //   this.task.snapshotChanges().pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         // The above step returns an observable which can be subscribed to fetch the data within it
  //         this.downloadURL.subscribe(data => {
  //           // storing downloadURL as imageURL
  //           this.imageURL = data;    
  //           console.log(this.imageURL);     
            
  //           this.authService.updateURL(this.imageURL);
  //         });

  //       })
  //    ).subscribe();
  // }

}
