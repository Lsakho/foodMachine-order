import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  {path: "order", component: OrderPageComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
