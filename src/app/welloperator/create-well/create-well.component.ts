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
  result;
  fileToUpload: File;
  
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
    let selectedFiles = wellData.value.attachment;
    console.log(selectedFiles);
    this.fileToUpload = selectedFiles.files[0];
    console.log(selectedFiles.files[0]);
    let formData = new FormData();
    formData.append('wellName', wellData.value.wellName);
    formData.append('wellType', wellData.value.wellType);
    formData.append('lease', wellData.value.lease);
    formData.append('xLoc', wellData.value.xLoc);
    formData.append('yLoc', wellData.value.yLoc);
    formData.append('zLoc', wellData.value.zLoc);
    formData.append('locationType', wellData.value.locationType);
    formData.append('attachment', this.fileToUpload);
    console.log(formData);

    this.wellOperatorService.createWell(formData).subscribe(value => {
      this.result = value;
    });
    console.log(this.result);
    wellData.resetForm();
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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    //
  }

}
