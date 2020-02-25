import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData
{
  response: string;
}


@Injectable({
  providedIn: 'root'
})
export class CmpnyserviceService {

  constructor(private http: HttpClient) { }

  signupcmpny(role:string,companyName: string,email:string,password: string) {
    return this.http.post<AuthResponseData>('http://192.168.43.222:4000/signup',
    { 
      role:role,
      companyName:companyName,
      email:email,
      password:password
     
    
    });
  }
}
