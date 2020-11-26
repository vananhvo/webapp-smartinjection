import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MyWellsService {

  private url = 'http://localhost:10050/wells';

  constructor(private http: HttpClient) { }

  getWells() {
      return this.http.get(this.url);
  }

}