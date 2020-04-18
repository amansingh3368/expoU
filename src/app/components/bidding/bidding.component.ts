import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InitialisationService } from 'src/app/shared/services/initialisation.service';
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  auctionData;
  constructor(private route: ActivatedRoute, public initial: InitialisationService,public register: RegisterProdService) { }

  ngOnInit() {
    this.auctionData=this.initial.auctionData;
  }

  updateBid(data){
    if(data>this.auctionData.payload.doc.data().minbid){
      this.register.updateBid(this.auctionData,data);
    }
  }


  }
  
 

