import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WelloperatorService {

  private url = 'http://localhost:10050/create';

  constructor(private http: HttpClient) { }

  createWell(formData) {
    return this.http.post(this.url, formData);
  }

}
