import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MyWellsService} from './my-wells.service';


@Component({
  selector: 'app-my-wells',
  templateUrl: './my-wells.component.html',
  styleUrls: ['./my-wells.component.scss'],
})

export class MyWellsComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'wellName',
    'proposalStatus', 
    'lease', 
    'api',
  ];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private myWellsService: MyWellsService){}

  ngOnInit(): void {
    this.myWellsService.getWells().subscribe(value => {
      console.log(value);
      this.dataSource = new MatTableDataSource(<any> value);
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

export interface myWells {
  wellName: string;
  proposalStatus: string;
  lease: string;
  api: number;
  uicProjectNo: number;
  location: string;
}

const WELL_DATA: myWells[] = [
  {
    wellName: "Wild Cat #1",
    proposalStatus: "Pending",
    lease: "Angela's Field",
    api: 1234567891,
    uicProjectNo: 7894561237,
    location: "0000 0000 0000"
  },
  {
    wellName: "Wild Hound #1",
    proposalStatus: "Approved",
    lease: "Andrew's Field",
    api: 987685239,
    uicProjectNo: 135879452,
    location: "0000 0000 0000"
  },

];