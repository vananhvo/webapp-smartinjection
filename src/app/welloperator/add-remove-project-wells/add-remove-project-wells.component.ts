import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DefaultService } from 'src/app/default.service';

// **--- For Added Wells Table ---**
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

// **--- END Added Wells Table ---**

// **--- For Selection Table -- **
export interface CreatedWell {
  wellName: string;
  lease: string;
  wellType: string;
  locationType: string;
  location: string;
}

const ELEMENT_DATA: CreatedWell[] = [
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'H', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'He', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'Li', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'Be', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'B', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'C', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'N', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'O', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'F', location: '000 000 000'},
  {wellName: 'wellName', lease: 'Field Name', wellType: 'I', locationType: 'Ne', location: '000 000 000'},
];

// **--- End of Selection Table -- **

@Component({
  selector: 'app-add-remove-project-wells',
  templateUrl: './add-remove-project-wells.component.html',
  styleUrls: ['./add-remove-project-wells.component.scss']
})


export class AddRemoveProjectWellsComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  selectTableCol: string[] = ['select', 'wellName', 'lease', 'wellType', 'location'];
  dataSource1 = WELL_DATA;
  dataSource2 = new MatTableDataSource<CreatedWell>(ELEMENT_DATA);
  selection = new SelectionModel<CreatedWell>(true, []);
  
  // **--- For Project Name ---**
  updateProjectName: any;

  // **--- For Project Information ---**
  owner = "John Smith";
  projectDate = "12/12/20";
  wells = 1;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource2.data.forEach(row => this.selection.select(row));
  }

  @ViewChild(MatSort) sort: MatSort;

  

  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.dataSource2.sort = this.sort;
    this.defaultService.getProjectName().subscribe(name => {
      this.updateProjectName = name;
    })
  }


}
