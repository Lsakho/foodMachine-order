import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from './Service/get-recipes.service';
import { RestoCategoryInterface, recipeInterface } from './datas.interface';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FoodMachine';
  orderForm!: FormGroup;
  recipesCategories!: RestoCategoryInterface[];

  async ngOnInit(){
    
    const recipesCategories= await this.GetRecipesService.getRecipe();
    this.recipesCategories = recipesCategories;  
    this.orderForm = new FormGroup({
      recipes: new FormArray([]),
      dateTime: new FormControl()
    });
  }

  private _addRecipeForm(recipeId: string, quantity: number){
    // build group element with recipeId and quantity
    const group = new FormGroup({
      recipeId: new FormControl(recipeId, Validators.compose([
        Validators.required
      ])),
      quantity : new FormControl(quantity, Validators.compose([
       Validators.required 
      ])),
    });
    // get form Array control to add selected recipe
  const formArray  = this.orderForm.get('recipes') as FormArray;
  // add recipe array from
  formArray.push(group);
  //display result in console
  console.log(this.orderForm.value)
  }
  

  actions($event: {type: string; payload: recipeInterface}){
    console.log($event)
    this._addRecipeForm($event.payload.uuid, 1);

  }
  constructor(
    private readonly GetRecipesService: GetRecipesService
  ){}
}
