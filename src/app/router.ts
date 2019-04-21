import { Routes } from "@angular/router";
import { Home } from "./core/pages/home/home.page";
import { About } from "./core/pages/about/about.page";
import { Restaurants } from "./core/pages/restaurants/pages/home/restaurants.page";
import { RestaurantsDetail } from "./core/pages/restaurants/pages/restaurantsDetail/restaurants-detail.page";

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
        component: RestaurantsDetail
    }
]