import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // },
  {
    path: 'home', component: HomeComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'new-user', component: NewComponent
  }, {
    path: 'edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
