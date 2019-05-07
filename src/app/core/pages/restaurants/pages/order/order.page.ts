import { Component, OnInit } from "@angular/core";
import { RadioModel } from "app/shared/components/radio-component/model/radio.model";

/**
 * @name order.page
 */
@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    
})
export class OrderPage implements OnInit {

    paymentOptions: Array<RadioModel> = [{
        label: 'Dinheiro',
        value: 'mon'
    },
    {
        label: 'Débito em Conta',
        value: 'deb'
    },
    {
        label: 'Cartão de Crédito',
        value: 'cart'
    }]

    constructor() {
        
    }
    ngOnInit() {
        
    }

}