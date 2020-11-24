import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/default.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {

  wells;
  sideBarOpen = true;

  constructor(private defaultService: DefaultService) { }

  ngOnInit() {
    console.log('In init');
    this.defaultService.getWells().subscribe(value => {
      this.wells = value;
    })
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
