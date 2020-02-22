import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentComponent } from './student/student.component';
import { ExamComponent } from './exam/exam.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'student', component: StudentComponent, canActivate:[RouteGuardService]},
  { path: 'exam', component: ExamComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
