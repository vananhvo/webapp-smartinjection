import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

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

@Component({
  selector: 'app-propose-wells',
  templateUrl: './propose-wells.component.html',
  styleUrls: ['./propose-wells.component.scss']
})
export class ProposeWellsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'wellName', 'lease', 'wellType', 'locationType', 'location'];
  dataSource = new MatTableDataSource<CreatedWell>(ELEMENT_DATA);
  selection = new SelectionModel<CreatedWell>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
