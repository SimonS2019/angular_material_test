import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese Extra cheese Extra cheeseExtra cheeseExtra cheeseExtra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
