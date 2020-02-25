  import { Component, OnInit } from '@angular/core';
  import { LoginService } from '../login.service';
  import { NgForm } from '@angular/forms';
  import * as jwt_decode from 'jwt-decode';
  import { ApprovedService } from '../approved.service';
  import { async } from '@angular/core/testing';
import { Router } from '@angular/router';


  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent  {
    decoded: any;
    email: any;
    password1: any;
  


    constructor(private loginService: LoginService,private router: Router) { }
   
    // public detailss;
    // async details(){
    //   this.approvedService.getDetails().subscribe(res => {this.detailss = res;  console.log(this.detailss)} ); }
   
   
   
      onSubmit(form: NgForm){
      if(!form.valid){
        return;
      }
      const email= form.value.mail;
      const password = form.value.password;
      // this.details()
    
      this.loginService.login(email, password).subscribe(resData=>{
        console.log(resData);
        this.setSession(resData);
      },
      error => {
      console.log(error);

      });
      form.reset();
    }
    setSession(authResult: any) {  
      localStorage.setItem('token',authResult.token);
      const decoded: any = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
     var role = decoded.role;

      console.log(role);


      

      
       if (role=="student") {
       this.router.navigate(['studentdash']);
      }
       else if(role=="company") {
       this.router.navigate(['verify']);
       }
       else if(role=="admin"){
        //  let username=this.email;
        //  let password=this.password1;
        // if((username=="admin")&&(password=="admin"))
        // {
        
        this.router.navigate(['pendinglist']);
        // }

       }
       else{
        alert("user not authorized")
       }


      // console.log(localStorage.getItem("token"));
      }
  }
