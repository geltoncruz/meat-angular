import { Component, Input, OnInit, forwardRef } from "@angular/core";
import { RadioModel } from "./model/radio.model";
import { NG_VALUE_ACCESSOR ,ControlValueAccessor } from "@angular/forms";


/**
 * Component radio payment mode.
 */
@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=> Radio )
        }
    ]
})
export class Radio implements OnInit, ControlValueAccessor{
    
    onChange: any;
    
    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
    }
    
    @Input() paymentOpt: Array<RadioModel> = [];
    value: any;

    ngOnInit(): void {
        console.log(this.paymentOpt);
        
    }

    setValue(radio: any){
        
        this.value = radio.value;
        this.registerOnChange(this.value);
    }
    
}