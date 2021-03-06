import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ShowNewsComponent } from './views/show-news/show-news.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'addNews',component:AddNewsComponent,canActivate:[AuthGuardService]},
  {path:'showNews',component:ShowNewsComponent,canActivate:[AuthGuardService]},
  {path:'editNews/:id',component:EditNewsComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
