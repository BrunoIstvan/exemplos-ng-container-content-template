import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatButtonModule, 
  MatCardModule, 
  MatCheckboxModule, 
  MatProgressBarModule, 
  MatRadioModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ProductFormModule } from './product-form/product-form.module';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentFormModule } from './department-form/department-form.module';
import { ProductsTableModule } from './products-table/products-table.module';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ProductFormModule,
    DepartmentFormModule,
    ProductsTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
