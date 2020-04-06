import { Injectable } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { generateRandomString } from 'src/app/app.utils';
@Injectable({
  providedIn: 'root'
})
export class RegisterProdService {

  constructor(private firestore: AngularFirestore) { }

    form= new FormGroup({
      creativityname: new FormControl(''),
      creativitydescription: new FormControl(''),
      minbid: new FormControl(''),
      auctime: new FormControl('')
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
}
