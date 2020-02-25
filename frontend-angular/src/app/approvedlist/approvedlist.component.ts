import { Component, OnInit } from '@angular/core';
import { ApprovedService } from '../approved.service';

@Component({
  selector: 'app-approvedlist',
  templateUrl: './approvedlist.component.html',
  styleUrls: ['./approvedlist.component.css']
})
export class ApprovedlistComponent implements OnInit {

  constructor( private approvedService: ApprovedService) { }
  public detailss;
  
  async details(){
    this.approvedService.getDetails().subscribe(res => {this.detailss = res;  console.log(this.detailss)} ); }

    ngOnInit() {
      this.details();
    }


}
