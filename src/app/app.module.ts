import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { HeaderComponent } from './core/header/header.component';
import { Home } from './core/pages/home/home.page';
import { About } from './core/pages/about/about.page';
import { Restaurants } from './core/pages/restaurants/pages/home/restaurants.page';
import { restaurantItem } from './core/pages/restaurants/components/restaurant-item/restaurant-item.component';
import { RestaurantsDetail } from './core/pages/restaurants/pages/restaurants-detail/restaurants-detail.page';
import { RestaurantService } from './core/pages/restaurants/services/Restaurant.service';

import { ROUTES } from './router';
import { RestaurantMenu } from './core/pages/restaurants/components/restaurant-menu/restaurant-menu.component';
import { restaurantCart } from './core/pages/restaurants/components/restaurant-cart/restaurant-cart.component';
import { RestaurantsReviews } from './core/pages/restaurants/pages/restaurants-reviews/restaurants-reviews.page';
import { RestaurantMenuItem } from './core/pages/restaurants/components/restaurant-menu-item/restaurant-menu-item.component';
import { ShoppingSartService } from './core/pages/restaurants/services/shopping-cart.service';
import { OrderPage } from './core/pages/restaurants/pages/order/order.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Home,
    About,
    Restaurants,
    restaurantItem,
    RestaurantsDetail,
    RestaurantMenu,
    RestaurantMenuItem,
    restaurantCart,
    RestaurantsReviews,
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantService,
    ShoppingSartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
