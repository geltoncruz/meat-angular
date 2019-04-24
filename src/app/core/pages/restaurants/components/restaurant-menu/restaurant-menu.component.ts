import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../../services/Restaurant.service";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "../../model/menu-item.model";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-restaurant-menu',
    templateUrl: './restaurant-menu.component.html'
})
export class RestaurantMenu implements OnInit {

    menuItem: Observable<MenuItem[]>;
    constructor(
        private restaurantService: RestaurantService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.menuItem = this.restaurantService.menuOfRestaurants(this.route.parent.snapshot.params['id'])

    }




}