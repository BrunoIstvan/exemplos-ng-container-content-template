import { NgModule } from "@angular/core";
import { ProductFormComponent } from './product-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({ 
    exports: [ ProductFormComponent ],
    declarations: [ ProductFormComponent ],
    imports: [ CommonModule, FormsModule ],
    providers: [ ]
})
export class ProductFormModule { }