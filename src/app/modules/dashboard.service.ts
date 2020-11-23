import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url = 'http://localhost:10050/regulator';

  constructor(private http: HttpClient) {
  }

  getUICProjectTable() {
    console.log('in getUICProjectTable');
    return this.http.get(this.url);
  }

}
