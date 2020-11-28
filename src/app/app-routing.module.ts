import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './regulator/default/default.component';
import { LoginComponent } from './login/login.component';
import { ReghomeComponent } from './pages/reghome/reghome.component';
import { UicprojectsComponent } from './pages/uicprojects/uicprojects.component';
import { WelloperatorComponent } from './welloperator/welloperator.component';
import { UicmainComponent } from './pages/uicmain/uicmain.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: DefaultComponent,
    children: [
        { path: 'home', component: ReghomeComponent},
        { path: 'uic', component: UicmainComponent },
        { path: 'uicreview', component: UicprojectsComponent }
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
