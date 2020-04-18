import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialisationService {
  auctionData;
  constructor() { }
  initialiseData(auctionData){
    this.auctionData=auctionData;
  }


 
}
