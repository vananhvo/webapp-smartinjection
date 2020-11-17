import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatIconModule } from '@angular/material/icon';
import { WelloperatorComponent } from 'src/app/welloperator/welloperator.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
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
    MatFormFieldModule
  ],
  providers: [
    DashboardService,
  ]
})
export class DefaultModule { }
