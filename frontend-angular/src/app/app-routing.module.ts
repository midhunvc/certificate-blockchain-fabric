import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { ApplycertComponent } from './applycert/applycert.component';
import { ProviderComponent } from './provider/provider.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { ApprovedlistComponent } from './approvedlist/approvedlist.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { SigncmpnyComponent } from './signcmpny/signcmpny.component';
import { LogincpaComponent } from './logincpa/logincpa.component';


const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'verify',component:VerifyComponent},
  {path:'applycert',component:ApplycertComponent},
  {path:'provider',component:ProviderComponent},
  {path:'pendinglist',component:PendinglistComponent},
  {path:'approvedlist',component:ApprovedlistComponent},
  {path:'studentdash',component:StudentdashComponent},
  {path:'signupcmpny' ,component:SigncmpnyComponent},
  {path:'logincpa',component:LogincpaComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
