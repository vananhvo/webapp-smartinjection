import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welloperator',
  templateUrl: './welloperator.component.html',
  styleUrls: ['./welloperator.component.scss']
})
export class WelloperatorComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
