import { Component, OnInit } from '@angular/core';
import { ApplycertService } from '../applycert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-applycert',
  templateUrl: './applycert.component.html',
  styleUrls: ['./applycert.component.css']
})
export class ApplycertComponent {

  constructor(private applycertService: ApplycertService) { }

  onSubmit(form: NgForm){
    
    if(!form.valid){
      return;
    }
    const name = form.value.name;
    const age = form.value.age;
    const email =form.value.email;
    const provider = form.value.provider;
    const owner = form.value.owner;
    const type= form.value.type;
   
   
  
    this.applycertService.apply(name,age,email,provider,owner,type).subscribe(resData=>{
      console.log(resData);
    },
    error => {
    console.log(error);

    });
    form.reset();

}

 

}
