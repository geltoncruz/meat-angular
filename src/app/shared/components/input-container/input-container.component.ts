import { Component, Input, ContentChild, AfterContentInit, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

/**
 * @name input-container.component
 */

@Component({
    selector: 'app-input-container',
    templateUrl: './input-container.component.html'
})
export class InputContainer implements OnInit, AfterContentInit {

    @Input() label: string;
    @Input() errorMessage: string;

    input: any;
    @ContentChild(NgModel) model: NgModel;


    ngOnInit() {}

    ngAfterContentInit() {
        this.input = this.model;

        if (this.input === undefined) {
            throw new Error('Esse conteúdo precisa ser usado com a diretiva NgModel');
        }
    }

    hasSuccess(): boolean{
        return this.input.valid && (this.input.dirty || this.input.touched)
    }
    hasError(): boolean{
        return this.input.invalid && (this.input.dirty || this.input.touched)
        
    }
}