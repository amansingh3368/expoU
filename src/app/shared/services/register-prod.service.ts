import { Injectable } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
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
      return new Promise<any>((resolve, reject)=>{
        this.firestore.collection("auctionData").add(data).then(res=>{}, err=>reject(err));
      })
    }
}
