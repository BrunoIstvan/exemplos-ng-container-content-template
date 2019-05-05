import { NgModule } from "@angular/core";
import { DepartmentFormComponent } from './department-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule( {
    exports: [ DepartmentFormComponent ],
    declarations: [ DepartmentFormComponent ],
    imports: [ CommonModule, FormsModule ], 
    providers: [ ]
})
export class DepartmentFormModule { }