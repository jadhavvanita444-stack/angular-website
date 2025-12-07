import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  // private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient,) { }

  getData() {
    var url=`${environment.apiUrl}/Acceptedpapers`;
    //  var url=`${environment.apiUrl}/Acceptedpa`
    return this.http.get(url);
  }



}
