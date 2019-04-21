import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component'
import { HeaderComponent } from './core/header/header.component';
import { Home } from './core/pages/home/home.page';
import { About } from './core/pages/about/about.page';
import { Restaurants } from './core/pages/restaurants/pages/home/restaurants.page';
import { restaurant } from './core/pages/restaurants/components/restaurant.component';
import { RestaurantService } from './core/pages/restaurants/services/Restaurant.service';

import { ROUTES } from './router';
import { RestaurantsDetail } from './core/pages/restaurants/pages/restaurantsDetail/restaurants-detail.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Home,
    About,
    Restaurants,
    restaurant,
    RestaurantsDetail
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
