import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from './Service/get-recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FoodMachine';

  async ngOnInit(){
    console.log('ngOnInit');
    const result= await this.GetRecipesService.getRecipe();
    console.log(result);
  }

  constructor(
    private readonly GetRecipesService: GetRecipesService
  ){}
}
