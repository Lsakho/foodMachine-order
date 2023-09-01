import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipeElementComponent } from './recipe-element/recipe-element.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    CategoryListComponent,
    RecipeListComponent,
    RecipeElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
