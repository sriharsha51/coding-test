import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AddressPipe } from './pipes/address.pipe';
import { USDCurrencyPipe } from './pipes/usdcurrency.pipe';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { UserResolverService } from './services/user.resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    UserComponent,
    HeaderBarComponent,
    AddressPipe,
    USDCurrencyPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
