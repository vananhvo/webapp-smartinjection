import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {OperatorDashboardService} from './wo-dashboard.service';
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

  ngOnInit(): void {
    this.defaultService.getProjects().subscribe(value => {
      console.log(value);
      this.dataSource = new MatTableDataSource(<any> value);
    })
  }

  displayedColumns: string[] = [
    'projectName',
    'projectNo',
    'projectStatus'
  ];
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
}

