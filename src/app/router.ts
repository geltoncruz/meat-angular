import { Routes } from "@angular/router";
import { Home } from "./core/pages/home/home.page";
import { About } from "./core/pages/about/about.page";
import { Restaurants } from "./core/pages/restaurants/restaurants.page";

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
    }
]