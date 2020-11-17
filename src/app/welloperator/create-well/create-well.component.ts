import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



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
  constructor() { }

  ngOnInit(): void {
  }

}
