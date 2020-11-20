import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-create-well',
  templateUrl: './create-well.component.html',
  styleUrls: ['./create-well.component.scss']
})
export class CreateWellComponent implements OnInit{
  // createWellForm = this.fb.group({
  //   wellName: ['', Validators.required],
  //   lease: [''],
  //   wellType: ['']

  // });
// private fb: FormBuilder

  ComponentName = "Create Well";
  locationShow = true;
  
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
  }

  createWell() {
    console.log("Hello Create Well Form Has Been Submitted!");
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
