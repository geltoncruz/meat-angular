import { Component } from "@angular/core";
import { Restaurant } from "./model/restaurant.model";

/**
 * @name Restaurants.page
 * @description Restaurant main page.
 * @author Gelton Cruz
 */
@Component({
    selector: 'app-restaurants',
    templateUrl: 'restaurants.page.html'
})
export class Restaurants{

    restaurants: Array<Restaurant> = [
        {
            id: "bread-bakery",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png",
          },
          {
            id: "burger-house",
            name: "Burger House",
            category: "Hamburgers",
            deliveryEstimate: "100m",
            rating: 3.5,
            imagePath: "assets/img/restaurants/burgerhouse.png",
          },
    ]

    constructor(){

    }
    
}