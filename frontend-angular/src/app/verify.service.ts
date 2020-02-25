import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponseData
{
  response: string;
}


@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }

  // verify(name:string) {
  //   return this.http.post<AuthResponseData>('http://192.168.43.222:4000/certificate/name',
  //   { 
  //     name:name,
  //   });
  // }

verify(id){

  const token = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
      'Authorization': 'Bearer '+token
    })
  };
  
    return this.http.get('http://192.168.43.222:4000/channels/cvchannel/chaincodes/certccc?fcn=viewCertificates&peer=peer0.CPA.certverification.com&args='+id,httpOptions);

   
  
}




}



