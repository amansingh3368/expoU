import { Injectable } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import 'firebase/firestore';
import { generateRandomString } from 'src/app/app.utils';
import { Observable } from 'rxjs';
import { auctionData } from './auctionData';

@Injectable({
  providedIn: 'root'
})
export class RegisterProdService {
  auctionDataCollection: AngularFirestoreCollection<auctionData>;


  constructor(private firestore: AngularFirestore) { 
    
  }

    form= new FormGroup({
      creativityname: new FormControl(''),
      creativitydescription: new FormControl(''),
      minbid: new FormControl(''),
      auctime: new FormControl(''),
      imageData: new FormControl('')
    })

    createAuctionData(data){
      return new Promise<any>(async(resolve, reject)=>{
        try{
            const docId=generateRandomString(21);
            await this.firestore.collection("AuctionData").doc(docId).set(JSON.parse(JSON.stringify(data)));
        }catch(error){
          reject(error);
        }
        // this.firestore.collection("auctionData").add(data).then(res=>{}, err=>reject(err));
      })
    }

      getAuctionData(){
        return this.firestore.collection('AuctionData').snapshotChanges();
      }

      updateBid(aucData,data){
        this.firestore.collection('AuctionData').doc(aucData.payload.doc.id).set({minbid:data},{merge:true});
      }
    

}
