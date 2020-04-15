import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InitialisationService } from 'src/app/shared/services/initialisation.service';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  auctionData;
  constructor(private route: ActivatedRoute, public initial: InitialisationService) { }

  ngOnInit() {
    this.auctionData=this.initial.initialiseData;
    })
  }
  
 

}
