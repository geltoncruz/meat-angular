/**
 * @name restaurants-reviews.page
 */
import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/Restaurant.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-restaurants-reviews',
    templateUrl: 'restaurants-reviews.page.html'
})
export class RestaurantsReviews implements OnInit {


    reviews: Observable<any>;

    constructor(private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.reviews = this.restaurantService.getReviews(this.route.parent.snapshot.params['id']);
    }


}