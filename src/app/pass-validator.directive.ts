import { Directive, forwardRef, Attribute } from '@angular/core';
import {Validator,AbstractControl,NG_VALIDATORS} from '@angular/forms';
@Directive({
  selector: '[validatetoEqual][formControlName],[validatetoEqual][formControl],[validatetoEqual][ngModel]',
  providers :[
    {provide:NG_VALIDATORS,useExisting: forwardRef(() => PassValidatorDirective),multi:true}
  ]
})

export class PassValidatorDirective {

  constructor(@Attribute('validatetoEqual') public validatetoEqual:string) { }
  validate(c:AbstractControl):{[key:string]:any} {
    let v=c.value;

    let e = c.root.get(this.validatetoEqual);

    if(e && v != e.value)
      return{validatetoEqual:false}
      
      return null;
    }
 

}
