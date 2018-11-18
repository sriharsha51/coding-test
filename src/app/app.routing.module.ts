import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserResolverService } from './services/user.resolver.service';
import { UsersResolverService } from './services/users.resolver.service';

const appRoutes: Routes = [
    { path: 'users', component: UsersComponent, canActivate: [AuthGuardService], resolve: {users: UsersResolverService}},
    { path: 'login', component: LoginComponent},
    { path: 'user/:id', component: UserComponent, canActivate: [AuthGuardService], resolve: {user: UserResolverService}},
    { path: '', component: LoginComponent},
    { path: '**', component: UsersComponent, canActivate: [AuthGuardService], resolve: {users: UsersResolverService}},
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
  })
export class AppRoutingModule {

  constructor() {
  }

}