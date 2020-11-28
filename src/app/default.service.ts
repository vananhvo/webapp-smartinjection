import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  private url = 'http://localhost:10050/wells';
  private project = 'http://localhost:10050/uic';

  constructor(private http: HttpClient) {
  }

  getWells() {
    console.log('in getWells');
    return this.http.get(this.url);
  }

  getProjects() {
    console.log('in getProjects');
    return this.http.get(this.project);
  }

}
