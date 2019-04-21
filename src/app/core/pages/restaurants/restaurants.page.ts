/**
 * @name Restaurants.page
 * @description Restaurant main page.
 * @author Gelton Cruz
 */

import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./model/restaurant.model";
import { RestaurantService } from "./services/Restaurant.service";
@Component({
    selector: 'app-restaurants',
    templateUrl: 'restaurants.page.html'
})
export class Restaurants implements OnInit {
    
    restaurants: Array<Restaurant> = []
    
    constructor(private restaurantService: RestaurantService) {}
    
    ngOnInit() {
        this.restaurants = this.restaurantService.getRestaurants();
    }
    
}