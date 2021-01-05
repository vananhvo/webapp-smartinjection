import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-existing-project',
  templateUrl: './existing-project.component.html',
  styleUrls: ['./existing-project.component.scss']
})
export class ExistingProjectComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
