import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/userinfo.component';
import { UserService } from './users/user.service';
import {  Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const myRouter:Routes =[
  { path :"home", component:UserInfoComponent },
  {
    path :"registration", component:UsersComponent
  },
  {
    path :"edit/:id", component:UsersComponent
  },  
  { path:'',   redirectTo:"/home",pathMatch: 'full' }

];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule,
    RouterModule.forRoot(myRouter)
  
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
