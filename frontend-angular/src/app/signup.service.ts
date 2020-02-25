import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponseData
{
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(role:string,firstName: string, middleName:string,lastName:string,email:string,phoneNumber:string,password: string) {
    return this.http.post<AuthResponseData>('http://192.168.43.222:4000/signup',
    { 
      role:role,
      firstName:firstName,
      middleName:middleName,
      lastName:lastName,
      email:email,
      phoneNumber:phoneNumber,
      password:password
    });
  }
}
