import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uicmain',
  templateUrl: './uicmain.component.html',
  styleUrls: ['./uicmain.component.scss']
})
export class UicmainComponent implements OnInit {

  listOfPendingProjects: string[] = ['Snubble', 'Pikachu', 'Jigglypuff', 'Gastly', 'Eevee']

  constructor() { }

  ngOnInit(): void {
  }

}
