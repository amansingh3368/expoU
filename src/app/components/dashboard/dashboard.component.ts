import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  auctionDatas;
  constructor(public authService: AuthService, private regisProd: RegisterProdService,private afs: AngularFirestore) { }

  ngOnInit() {
    this.getAuctionData();
  }

  getAuctionData=()=>this.regisProd.getAuctionData().subscribe(res=>(this.auctionDatas=res));

  
  
}
