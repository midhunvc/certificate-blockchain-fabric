import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedService {

  constructor(private http: HttpClient) { }
  getDetails() {
    return this.http.get('http://192.168.43.222:4000/certificate/approved');
  }
}
