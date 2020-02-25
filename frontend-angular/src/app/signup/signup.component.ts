import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 

constructor(private signupService: SignupService,private router:Router) { }

  onSubmit(form: NgForm){
    
    if(!form.valid){
      return;
    }

    const role=form.value.role;
    const firstName = form.value.fname;
    const middleName = form.value.mname;
    const lastName =form.value.lname;
    const email = form.value.email;
    const number=form.value.num;
    const password = form.value.password;
  
    console.log(role);
   
    this.signupService.signup(role,firstName,middleName,lastName,email,number,password).subscribe(resData=>{
      console.log(resData);
      this.router.navigate(['login']);
     
    },
    error => {
    console.log(error);

    });
    form.reset();

}

}
