import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = "https://mailthis.to/immerciless"
  constructor(private httpClient: HttpClient) { }
PostMessage(input:any){
  return this.httpClient.post(this.api,input, { responseType: 'text' }).pipe(
    map(
      (response) => {
        if (response) {
          return response;
        }
      },
      (error: any) => {
        return error;
      }
    )
  )
}
  
}
