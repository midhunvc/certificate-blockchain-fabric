import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
interface AuthResponseData
{
  response: string;
}



@Injectable({
  providedIn: 'root'
})
export class PendingService {

  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('http://192.168.43.222:4000/certificate/pending');
  }


  details(name: string, age: number,email: string, provider: string,owner: string, type:string ) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    };
    return this.http.post<AuthResponseData>('http://192.168.43.222:4000/channels/cvchannel/chaincodes/certccc',
     
      {
        "peers": ["peer0.CPA.certverification.com","peer0.verifier.certverification.com"],
        "fcn":"generateCertificate",
        "args":[""+name+"",""+age+"",""+email+"",""+provider+"",""+owner+"",""+type+""]
      }, httpOptions);


      //  httpOptions);
}

}
