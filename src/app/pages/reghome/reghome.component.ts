import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/default.service';

@Component({
  selector: 'app-reghome',
  styleUrls: ['./reghome.component.scss'],
  templateUrl: './reghome.component.html'
})
export class ReghomeComponent implements OnInit {

  wells;

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
    console.log('In init');
    this.defaultService.getWells().subscribe(value => {
      this.wells = value;
    })
  }

}
