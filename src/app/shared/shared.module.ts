import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CardComponent } from './widgets/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './widgets/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StepperComponent } from './widgets/stepper/stepper.component';
import { WoSidebarComponent } from './components/wo-sidebar/wo-sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    TableComponent,
    StepperComponent,
    WoSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    TableComponent,
    WoSidebarComponent
  ]
})
export class SharedModule { }
