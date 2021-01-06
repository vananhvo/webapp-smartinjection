import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DefaultService } from '../../default.service';

export interface myProject {
  projectName: string;
  UICProjectNumber: string;
  status: string;
}

@Component({
  selector: 'app-wo-dashboard',
  templateUrl: './wo-dashboard.component.html',
  styleUrls: ['./wo-dashboard.component.scss']
})
export class WoDashboardComponent implements AfterViewInit {
  pageTitle = "Well Operator Dashboard";
  dataSource;
  projectName;
  pName;
  
  displayedColumns: string[] = [
    'projectName',
    'projectNumber',
    'projectStatus'
  ];
  
  ngOnInit(): void {
    this.defaultService.getProjects().subscribe(value => {
      console.log("Value: ");
      console.log(value);
      console.log(value[1].state.data.projectName);
      console.log(value[1].state.data.linearId.id);
      this.projectName = value[1].state.data.projectName;
      this.dataSource = new MatTableDataSource(<any> value);
    })
  }


  // dataSource = new MatTableDataSource(WELL_DATA);


  @ViewChild(MatSort) sort: MatSort;

  constructor(private defaultService:DefaultService) {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  passProjectName(rowNum : any) {
    console.log("getName funct");
    console.log(rowNum);
    console.log(rowNum.state.data.projectName);
    this.defaultService.setProjectName({
      pName:  rowNum.state.data.projectName
    });
  }
}

