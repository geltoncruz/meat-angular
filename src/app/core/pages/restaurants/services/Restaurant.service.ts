/**
 * @name restaurant.service
 * @description Service of the restaurants.
 */
import { Injectable } from "@angular/core";

import { Restaurant } from "../model/restaurant.model";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { API_URL } from "app/const/api.const";
import { ErrorHandler } from "app/app.Error.Handler";
import { MenuItem } from "../model/menu-item.model";

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${API_URL}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.HandlerError);
    }

    findOne(id: string): Observable<Restaurant> {
        return this.http.get(`${API_URL}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.HandlerError);
    }

    getReviews(id: string): Observable<any> {
        return this.http.get(`${API_URL}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.HandlerError);
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]>{
        return this.http.get(`${API_URL}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.HandlerError);
    }



}