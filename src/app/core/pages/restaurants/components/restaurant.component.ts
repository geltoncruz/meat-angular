import { Component, Input } from "@angular/core";
import { Restaurant } from "../model/restaurant.model";

/**
 * @name restaurant.component
 * @description Individual component to display each restaurant.
 */
@Component({
    selector: 'app-restaurant',
    templateUrl: 'restaurant.component.html'
})
export class restaurant {

   @Input() restaurant: Restaurant;

}