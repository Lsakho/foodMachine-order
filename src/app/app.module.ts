import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeElementComponent } from './recipe-element/recipe-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './cuisine/cuisine.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';


const routes: Routes = [
  {
    path: 'home',
    component: OrderPageComponent
  },
  {
    path: 'cuisine',
    component: CuisineComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

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
    ReactiveFormsModule,
    AppRoutingModule,
    
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
