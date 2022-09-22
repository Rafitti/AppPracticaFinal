import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../compartido/ingrediente.model';

@Component({
  selector: 'app-listadecompras',
  templateUrl: './listadecompras.component.html',
  styleUrls: ['./listadecompras.component.css']
})
export class ListadecomprasComponent implements OnInit {
  ingredientes : Ingrediente[] = [
    new Ingrediente('Manzanas',5),
    new Ingrediente('Tomates',25),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onAgregaringrediente(ingredientess : Ingrediente){
    this.ingredientes.push(ingredientess);
  }

}
