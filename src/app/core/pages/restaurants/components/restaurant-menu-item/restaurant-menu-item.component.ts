/**
 * @name restaurant-menu.component
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';
import { RestaurantService } from '../../services/Restaurant.service';

@Component({
    selector: 'app-restaurant-menu-item',
    templateUrl: 'restaurant-menu-item.component.html'
})

export class RestaurantMenuItem implements OnInit {

    @Input() menuItem: MenuItem;
    @Output() add = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    addItemEmiiter(){
        this.add.emit(this.menuItem);
        console.log(this.menuItem);
        
    }
}