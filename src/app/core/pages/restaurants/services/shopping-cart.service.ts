import { ItemCart } from "../model/item-cart.model";
import { MenuItem } from "../model/menu-item.model";

/**
 * @name shopping-cart.service
 * @description Service to manage the shopping cart itens. 
 */
export class ShoppingSartService {

    items: ItemCart[] = [];
    quantity: number;
    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {

        let foundItem = this.items.find(Mitem => Mitem.menuItem.id === item.id);
        if (foundItem) {
            this.quantity = foundItem.quantity += 1;
            // this.quantity = this.quantity + 1;
        } else {
            this.items.push(new ItemCart(item));
        }

    }

    removeItem(item: any) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {

        return this.items
            .map(item => item.value())
            .reduce((ant, prx) => ant + prx, 0);
    }


}