import { Routes } from "@angular/router";
import { Home } from "./core/pages/home/home.page";
import { About } from "./core/pages/about/about.page";
import { Restaurants } from "./core/pages/restaurants/pages/home/restaurants.page";
import { RestaurantsDetail } from "./core/pages/restaurants/pages/restaurants-detail/restaurants-detail.page";
import { RestaurantMenu } from "./core/pages/restaurants/components/restaurant-menu/restaurant-menu.component";
import { RestaurantsReviews } from "./core/pages/restaurants/pages/restaurants-reviews/restaurants-reviews.page";
import { OrderPage } from "./core/pages/restaurants/pages/order/order.page";

export const ROUTES: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'restaurants',
        component: Restaurants
    },
    {
        path: 'restaurants/:id',
        component: RestaurantsDetail,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full'},
            { path: 'menu' , component: RestaurantMenu},
            { path: 'reviews', component: RestaurantsReviews}
        ]
    },
    {
        path: 'order',
        component: OrderPage
    }
]