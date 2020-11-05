import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { WelloperatorComponent } from './welloperator/welloperator.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'regulator', component: DefaultComponent,
      children: [
        { path: 'regulator', component: DashboardComponent },
        { path: 'uic', component: PostsComponent }
        ]
   },
  { path: 'welloperator', component: WelloperatorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
