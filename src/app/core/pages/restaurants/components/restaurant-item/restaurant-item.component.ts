import { Component, Input } from "@angular/core";
import { Restaurant } from "../../model/restaurant.model";

/**
 * @name restaurant.component
 * @description Individual component to display each restaurant.
 */
@Component({
    selector: 'app-restaurant-item',
    templateUrl: 'restaurant-item.component.html'
})
export class restaurantItem {

   @Input() restaurant: Restaurant;

}