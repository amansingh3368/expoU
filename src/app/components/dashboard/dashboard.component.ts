import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  constructor(public authService: AuthService, public regisProd: RegisterProdService) { }

  ngOnInit() {
    this.data=this.regisProd.getData();
    console.log(this.data);
  }

  
}
