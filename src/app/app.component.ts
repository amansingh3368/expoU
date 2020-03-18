import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expoU';

  constructor(public authService: AuthService) { }

}
