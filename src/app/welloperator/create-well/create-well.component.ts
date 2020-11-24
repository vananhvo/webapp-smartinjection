import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WelloperatorService } from '../welloperator.service';


@Component({
  selector: 'app-create-well',
  templateUrl: './create-well.component.html',
  styleUrls: ['./create-well.component.scss']
})
export class CreateWellComponent implements OnInit{

  ComponentName = "Create Well";
  locationShow = true;
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private wellOperatorService : WelloperatorService
  ){}

  ngOnInit(): void {
  }

  submitWell(wellData: NgForm) {
    console.log("Hello Create Well Form Has Been Submitted!");
    console.log(wellData.value); //return 

    this.wellOperatorService.createWell(wellData.value);
  }

  checkVal(x) {
    console.log(x);
  }

  getWellWellInfo() {
    // getters for the well information inputed 
  }

  urlAppend(){
    // appending the values into the URL 
    // https://stackoverflow.com/questions/46213737/angular-append-query-parameters-to-url
    
  }

}
