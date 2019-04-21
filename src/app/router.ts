import { Routes } from "@angular/router";
import { Home } from "./component/home/home.component";
import { About } from "./component/about/about.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    }
]