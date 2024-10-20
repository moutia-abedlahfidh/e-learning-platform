import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component : RedirectComponentComponent },  // Default route to 'signin'
  { path: 'panel', component: CoursesComponent , },
  { path : 'panel/users' , component : UsersComponent},
  { path : 'panel/addcourse' , component : AddCourseComponent},
  { path : 'panel/settings' , component : SettingsComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: AuthenticationComponent },
  { path: '**', redirectTo: 'signin' }  // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
