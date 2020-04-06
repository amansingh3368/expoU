import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  gallery : any[]=[];
  constructor(private firestore: AngularFirestore) { }
   getGallery(force :boolean){
    return new Promise<any[]>(async(resolve, reject)=>{
      try{
        if(!force || this.gallery.length>0){
          resolve(this.gallery);
          return ;
        }
        const imageDocs=await this.firestore.collection('images', ref => ref.orderBy('maintTs', 'desc')).get().toPromise();
        imageDocs.forEach(imageDoc =>{
          this.gallery.push(JSON.parse(JSON.stringify(imageDoc.data())));
        });
        resolve(this.gallery);
      }catch(error){
        reject(error);
      }
      // this.firestore.collection("auctionData").add(data).then(res=>{}, err=>reject(err));
    })
  }
  }

