import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/user/login/login.component';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { RegisterComponent } from './features/user/register/register.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'layout', loadChildren: () => LayoutRoutingModule, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
