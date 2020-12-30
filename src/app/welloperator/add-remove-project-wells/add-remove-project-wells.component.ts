import { Component, OnInit } from '@angular/core';

export interface WellInformation {
  name: string;
  lease: string;
  locationType: string;
  location: string;
}

const WELL_DATA: WellInformation[] = [
  {name: "Well 1", lease: " ", locationType: " ", location: " " },
  {name: "Well 2", lease: " ", locationType: " ", location: " " },
  {name: "Well 3", lease: " ", locationType: " ", location: " " },
  {name: "Well 4", lease: " ", locationType: " ", location: " " },
  {name: "Well 5", lease: " ", locationType: " ", location: " " },
  {name: "Well 6", lease: " ", locationType: " ", location: " " },
  {name: "Well 7", lease: " ", locationType: " ", location: " " },
  {name: "Well 8", lease: " ", locationType: " ", location: " " },
  {name: "Well 9", lease: " ", locationType: " ", location: " " },
  {name: "Well 10", lease: " ", locationType: " ", location: " " },
]

@Component({
  selector: 'app-add-remove-project-wells',
  templateUrl: './add-remove-project-wells.component.html',
  styleUrls: ['./add-remove-project-wells.component.scss']
})
export class AddRemoveProjectWellsComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource = WELL_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  owner = "John Smith";
  projectDate = "12/12/20";
  wells = 1;

}
