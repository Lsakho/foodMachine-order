import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeFilter'
})

export class RecipeFilterPipe implements PipeTransform {
  transform(recipes: any[], choice: string): any[] {
    if (!recipes || !choice) {
      return recipes;
    }

    // Appliquer le filtre en fonction du choix de l'utilisateur
    switch (choice) {
      case 'Tex-Mex':
        return recipes.filter(recipe => recipe.isTexMex);
      case 'Pizzas':
        return recipes.filter(recipe => recipe.isPizzas);
        case 'Boissons':
          return recipes.filter(recipe => recipe.isBoissons);
        case 'Glaces':
          return recipes.filter(recipe => recipe.isGlaces);
          case 'Dessert':
            return recipes.filter(recipe => recipe.isDessert);
          case 'Salades':
            return recipes.filter(recipe => recipe.isSalades);
      default:
        return recipes;
    }
  }
}