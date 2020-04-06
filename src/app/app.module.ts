import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotificationServicesService } from './shared/services/notification-services.service';
import { AngularFireStorageModule, AngularFireUploadTask } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { RegisterProdService } from './shared/services/register-prod.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    GalleryComponent,
    NotificationsComponent,
    InboxComponent,
    ProfileComponent,
    SettingsComponent,
    RegisterProductComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService, NotificationServicesService, RegisterProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
