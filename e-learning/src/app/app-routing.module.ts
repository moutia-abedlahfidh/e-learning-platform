import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },  // Default route to 'signin'
  { path: 'panel', component: SlidebarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: AuthenticationComponent },
  { path: '**', redirectTo: 'signin' }  // Wildcard route to handle undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
