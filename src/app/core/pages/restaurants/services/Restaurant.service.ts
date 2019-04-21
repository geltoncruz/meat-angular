/**
 * @name restaurant.service
 * @description Service of the restaurants.
 */
import { Restaurant } from "../model/restaurant.model";

export class RestaurantService {

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
        }
    ]
    constructor() { }

    getRestaurants(): Restaurant[] {
        return this.restaurants;
    }

}