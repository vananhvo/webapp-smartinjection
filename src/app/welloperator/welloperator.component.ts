import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welloperator',
  templateUrl: './welloperator.component.html',
  styleUrls: ['./welloperator.component.scss']
})
export class WelloperatorComponent implements OnInit {
  // @ViewChild(WoSidebarComponent) wosidebar:WoSidebarComponent;

  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
