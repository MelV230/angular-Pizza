import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent  {

  @Input() ingredients: Array<string> = []; 

  @Output() select: EventEmitter<Ingredient> = new EventEmitter(); 
  
  chooseIngredient(ingredient: Ingredient): void {
    this.select.emit(ingredient); 
  }

}
