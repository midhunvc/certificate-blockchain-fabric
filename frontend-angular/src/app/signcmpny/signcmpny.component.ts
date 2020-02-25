import { Component, OnInit } from '@angular/core';
import { CmpnyserviceService } from '../cmpnyservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signcmpny',
  templateUrl: './signcmpny.component.html',
  styleUrls: ['./signcmpny.component.css']
})
export class SigncmpnyComponent {

  constructor(private cmpnyserviceService: CmpnyserviceService,private router: Router ) { }

  onSubmit(form: NgForm){
    
    if(!form.valid){
      return;
    }
    const role=form.value.role;
    const companyName = form.value.cname;
    const email = form.value.email;
    const password = form.value.password;
  
   
   
  
    this.cmpnyserviceService.signupcmpny(role,companyName,email,password).subscribe(resData=>{
      console.log(resData);
      this.router.navigate(['login']);
     

    },
    error => {
    console.log(error);

    });
    form.reset();
  

}

}
