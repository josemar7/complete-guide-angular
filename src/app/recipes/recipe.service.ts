import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://c1.staticflickr.com/5/4005/4471191921_19cc29abbe_b.jpg',
  [
    new Ingredient('Meat', 1),
    new Ingredient('French Fries', 20)
  ]),
    new Recipe('Another Test Recipe', 'This is a simply test', 'https://c1.staticflickr.com/5/4005/4471191921_19cc29abbe_b.jpg',
  [
    new Ingredient('Buns', 2),
    new Ingredient('Meat', 1)
  ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
