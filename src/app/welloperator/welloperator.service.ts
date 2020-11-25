import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WelloperatorService {

  private url = 'http://localhost:10050/create';
  private headers = new HttpHeaders().set('Accept', 'text/*');

  constructor(private http: HttpClient) { }

  createWell(formData: FormData) {
    console.log("In create well, before the post call");
    return this.http.post(this.url, formData, {headers: this.headers, responseType: 'text'});
  }

}
