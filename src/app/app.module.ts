import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallcontactsComponent } from './viewallcontacts/viewallcontacts.component';
import{HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:ViewallcontactsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewallcontactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
