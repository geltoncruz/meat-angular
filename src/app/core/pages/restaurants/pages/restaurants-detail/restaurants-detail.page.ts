/**
 * @name restaurants-detail.page
 * @description Restaurants detail page
 */
import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/Restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { Restaurant } from "../../model/restaurant.model";

@Component({
    selector: 'app-restaurants-detail',
    templateUrl: './restaurants-detail.page.html'
})
export class RestaurantsDetail implements OnInit {

    restaurant: Restaurant;
        

    constructor(private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.restaurantService.findOne(this.route.snapshot.params['id'])
            .subscribe(restaurant => {
                this.restaurant = restaurant;
            });
    }

}