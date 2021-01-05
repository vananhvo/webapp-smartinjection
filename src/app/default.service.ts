import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  private headers = new HttpHeaders().set('Accept', 'text/*');

  private url = 'http://localhost:10050/wells';
  private project = 'http://localhost:10050/projects';
  private createProjectURL = 'http://localhost:10050/createProjectFlow'

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

  createProject(formData: FormData) {
    console.log('in createProject');

    return this.http.post(this.createProjectURL, formData, {headers: this.headers, responseType: 'text'});
  }


}
