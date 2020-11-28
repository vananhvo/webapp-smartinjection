import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { DefaultService } from 'src/app/default.service';

@Component({
  selector: 'app-uicprojects',
  templateUrl: './uicprojects.component.html',
  styleUrls: ['./uicprojects.component.scss']
})


export class UicprojectsComponent implements OnInit {

  wells;
  projects;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  wellFormGroup: FormGroup;
  wellsData = [];

  get wellsFormArray() {
    return this.wellFormGroup.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private defaultService: DefaultService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.defaultService.getWells().subscribe(value => {
      this.wells = value;
    });

    this.defaultService.getProjects().subscribe(value => {
      this.projects = value;
    });
  }

}
