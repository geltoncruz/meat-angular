import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component'
import { HeaderComponent } from './component/header/header.component';
import { Home } from './component/home/home.component';
import { About } from './component/about/about.component';
import { ROUTES } from './router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Home,
    About
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
