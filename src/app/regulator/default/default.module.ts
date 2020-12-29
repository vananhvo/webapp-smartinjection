import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { ReghomeComponent } from 'src/app/pages/reghome/reghome.component';
import { UicmainComponent } from 'src/app/pages/uicmain/uicmain.component';
import { UicprojectsComponent } from 'src/app/pages/uicprojects/uicprojects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { WelloperatorComponent } from 'src/app/welloperator/welloperator.component';




@NgModule({
  declarations: [
    DefaultComponent,
    ReghomeComponent,
    UicmainComponent,
    UicprojectsComponent,
    WelloperatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule

  ],
  entryComponents: [UicprojectsComponent],
  bootstrap: [UicprojectsComponent],
  providers: [
  ]
})
export class DefaultModule {

}
