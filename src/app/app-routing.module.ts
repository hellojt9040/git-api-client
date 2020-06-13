import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { WelcomeComponent } from './common/welcome/welcome.component';


const routes: Routes = [
  {path: '' , pathMatch: 'full', component:WelcomeComponent},
  {path: 'getUser/:userName' ,pathMatch: 'full', component: GetUserComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
