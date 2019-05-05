import { NgModule } from "@angular/core";
import { ProductsTableComponent } from './products-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    exports: [ ProductsTableComponent ],
    declarations: [ ProductsTableComponent ],
    imports: [ CommonModule, FormsModule ],
    providers: [ ]
})
export class ProductsTableModule { }