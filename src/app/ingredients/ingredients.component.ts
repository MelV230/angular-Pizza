import { Component, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.model'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent  {

@Input() ingredients: Array<string> = []; 

}
