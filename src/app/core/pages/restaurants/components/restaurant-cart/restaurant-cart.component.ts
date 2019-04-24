import { Component } from "@angular/core";
import { ShoppingSartService } from "../../services/shopping-cart.service";

@Component({
    selector: 'app-restaurant-cart',
    templateUrl: './restaurant-cart.component.html'
})
export class restaurantCart {

    constructor(private shoppingCartService: ShoppingSartService) { }

    addItem(item: any) {

        this.shoppingCartService.addItem(item);

    }
    clear() {
        this.shoppingCartService.clear()
    }
    removeItem(item: any) {
        this.shoppingCartService.removeItem(item);
    }

    items(): any[] {
        return this.shoppingCartService.items;
    }

    total(): number {
        return this.shoppingCartService.total();
    }
}