import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { InboxComponent } from './components/inbox/inbox.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-user', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, 
  // canActivate: [SecureInnerPagesGuard] 
},
  { path: 'register-user', component: SignUpComponent, 
  // canActivate: [SecureInnerPagesGuard] 
 },
  { path: 'dashboard', component: DashboardComponent,
  //  canActivate: [AuthGuard] 
   },
  { path: 'forgot-password', component: ForgotPasswordComponent,
  //  canActivate: [SecureInnerPagesGuard] 
   },
  { path: 'verify-email-address', component: VerifyEmailComponent,
  //  canActivate: [SecureInnerPagesGuard] 
   },
  { path: 'chatroom', component:ChatroomComponent },
  { path: 'notifications', component:NotificationsComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'settings', component:SettingsComponent},
  { path: 'gallery', component:GalleryComponent},
  { path: 'register-product', component:RegisterProductComponent},
  { path: 'register-product/:url', component:RegisterProductComponent},
  { path: 'bidding', component:BiddingComponent},
  { path: 'bidding/:auctionData', component:BiddingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
