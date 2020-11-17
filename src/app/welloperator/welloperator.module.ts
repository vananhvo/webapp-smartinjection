import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultModule } from '../layouts/default/default.module';
import { WoDashboardComponent } from './wo-dashboard/wo-dashboard.component';
import { CreateWellComponent } from './create-well/create-well.component';
import { MyWellsComponent } from './my-wells/my-wells.component';
import { ProposeWellsComponent } from './propose-wells/propose-wells.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    WoDashboardComponent, 
    CreateWellComponent, 
    MyWellsComponent, 
    ProposeWellsComponent, 
  ],
  imports: [
    CommonModule,
    DefaultModule,
    SharedModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class WelloperatorModule { }
