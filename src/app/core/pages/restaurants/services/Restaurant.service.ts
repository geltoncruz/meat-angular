/**
 * @name restaurant.service
 * @description Service of the restaurants.
 */
import { Injectable } from "@angular/core";

import { Restaurant } from "../model/restaurant.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { API_URL } from "app/const/api.const";

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${API_URL}/restaurants`).map(response => response.json());
    }

}