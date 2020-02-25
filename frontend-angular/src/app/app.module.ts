import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VerifyComponent } from './verify/verify.component';
import { ApplycertComponent } from './applycert/applycert.component';
import { ProviderComponent } from './provider/provider.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { ApprovedlistComponent } from './approvedlist/approvedlist.component';
import { StudentdashComponent } from './studentdash/studentdash.component';
import { ViewcertComponent } from './viewcert/viewcert.component';
import { SigncmpnyComponent } from './signcmpny/signcmpny.component';
import { LogincpaComponent } from './logincpa/logincpa.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    VerifyComponent,
    ApplycertComponent,
    ProviderComponent,
    PendinglistComponent,
    ApprovedlistComponent,
    StudentdashComponent,
    ViewcertComponent,
    SigncmpnyComponent,
    LogincpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
