import { Component} from '@angular/core';
import { VerifyService } from '../verify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
 public id;

  constructor(private verifyService:VerifyService, private  http: HttpClient) { }
  public detailss;
  


async verify(){
  console.log(this.id);
 
  var a = `["{\\"selector\\":{\\"id\\":\\"${this.id}\\"}}"]`
  console.log(a);
  var id=encodeURIComponent(a) 
  
 this.verifyService.verify(id).subscribe(res => {this.detailss = res;  console.log(this.detailss)} ); }

}
