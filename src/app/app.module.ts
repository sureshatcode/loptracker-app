import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

const appRoutings: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'signup', component: SignupComponent
  }, {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutings)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
