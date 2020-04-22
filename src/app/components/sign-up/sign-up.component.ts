import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],

  
})
export class SignUpComponent implements OnInit {
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
    
  }

  
  signInCss(){
    $('#container').removeClass("right-panel-active");
  }

  signUpCss(){
    $('#container').addClass("right-panel-active");
  }

  

}
