import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterProdService } from 'src/app/shared/services/register-prod.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, private regisProd: RegisterProdService) { }

  ngOnInit() {
  }
  data=this.regisProd.getData();

}
