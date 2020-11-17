import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CreateWellComponent } from './welloperator/create-well/create-well.component';
import { MyWellsComponent } from './welloperator/my-wells/my-wells.component';
import { ProposeWellsComponent } from './welloperator/propose-wells/propose-wells.component';
import { WelloperatorComponent } from './welloperator/welloperator.component';
import { WoDashboardComponent } from './welloperator/wo-dashboard/wo-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'regulator', component: DefaultComponent,
      children: [
        { path: 'regulator', component: DashboardComponent },
        { path: 'uic', component: PostsComponent }
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
