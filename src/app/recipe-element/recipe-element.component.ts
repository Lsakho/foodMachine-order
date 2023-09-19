import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recipeInterface } from '../datas.interface';


type actionType = 'add' | 'remove';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.scss']
})
export class RecipeElementComponent {
  @Input() recipe!: recipeInterface
  @Output() recipeEvent: EventEmitter<{
    type: actionType;
    payload: recipeInterface
  }> = new EventEmitter

  actions(type: actionType, payload: recipeInterface){
    this.recipeEvent.emit({type, payload})
  }

}
