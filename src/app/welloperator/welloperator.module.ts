import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
//import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { DefaultModule } from '../regulator/default/default.module';
import { AddRemoveProjectWellsComponent } from './add-remove-project-wells/add-remove-project-wells.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectConfirmComponent } from './project-confirm/project-confirm.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExistingProjectComponent } from './existing-project/existing-project.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddRemoveWellTableComponent } from './add-remove-well-table/add-remove-well-table.component';
import { ExistingProjectOverviewComponent } from './existing-project-overview/existing-project-overview.component';



@NgModule({
  declarations: [
    WoDashboardComponent, 
    CreateWellComponent, 
    MyWellsComponent, 
    ExistingProjectComponent, 
    ProposeWellsComponent,
    AddRemoveProjectWellsComponent, 
    ProjectConfirmComponent, 
    NewProjectComponent, 
    ConfirmDialogComponent, AddRemoveWellTableComponent, ExistingProjectOverviewComponent, 
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
    MatPaginatorModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatSortModule,
    HttpClientModule,
    MaterialFileInputModule,
    FlexLayoutModule,
    MatStepperModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class WelloperatorModule { }
