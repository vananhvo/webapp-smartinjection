import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './regulator/default/default.component';
import { LoginComponent } from './login/login.component';
import { ReghomeComponent } from './pages/reghome/reghome.component';
import { UicprojectsComponent } from './pages/uicprojects/uicprojects.component';
import { UicmainComponent } from './pages/uicmain/uicmain.component';
import { WelloperatorComponent } from './welloperator/welloperator.component';
import { MyWellsComponent } from './welloperator/my-wells/my-wells.component';
import { ProposeWellsComponent } from './welloperator/propose-wells/propose-wells.component';
import { WoDashboardComponent } from './welloperator/wo-dashboard/wo-dashboard.component';
import { CreateWellComponent } from './welloperator/create-well/create-well.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: DefaultComponent,
    children: [
        { path: 'home', component: ReghomeComponent},
        { path: 'uic', component: UicmainComponent },
        { path: 'uicreview', component: UicprojectsComponent }
    ]
  },
  { path: 'welloperator', component: WelloperatorComponent,
      children: [
        { path: '', component: WoDashboardComponent },
        { path: 'wo-dashboard', component: WoDashboardComponent },
        { path: 'create-well', component: CreateWellComponent },
        { path: 'my-wells', component: MyWellsComponent },
        { path: 'propose-wells', component: ProposeWellsComponent }
      ]
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
