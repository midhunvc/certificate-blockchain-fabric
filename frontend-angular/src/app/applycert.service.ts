import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData
{
  response: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApplycertService {

  constructor(private http: HttpClient) { }

  apply(name: string, age:string,email:string,provider:string,owner: string,type:string) {
    return this.http.post<AuthResponseData>('http://192.168.43.222:4000/certificate/apply',
    { 
      name:name,
      age:age,
      email:email,
      provider:provider,
      owner:owner,
      type:type
    
    });
  }
}
