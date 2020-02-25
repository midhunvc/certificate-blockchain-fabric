import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PendingService } from '../pending.service';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.css']
})
export class PendinglistComponent {

  constructor( private pendingService: PendingService) { }
  public detailss;

  async details(){
    this.pendingService.getDetails().subscribe(res => {this.detailss = res;  console.log(this.detailss)} ); }

    ngOnInit() {
      this.details();
    }

  det(name,age,email,provider,owner,type)  {


    this.pendingService.details(name,age,email,provider,owner,type).subscribe(resData=>{
      console.log(resData);
     
    },
    error => {
    console.log(error);

    });
  

}
    
    
  }





