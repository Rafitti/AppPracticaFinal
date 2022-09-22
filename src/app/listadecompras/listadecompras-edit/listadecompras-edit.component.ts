import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { Ingrediente } from '../../compartido/ingrediente.model'

@Component({
  selector: 'app-listadecompras-edit',
  templateUrl: './listadecompras-edit.component.html',
  styleUrls: ['./listadecompras-edit.component.css']
})
export class ListadecomprasEditComponent implements OnInit {
  @ViewChild('InputName',{static:false})nombreIngredienteRef : ElementRef;
  @ViewChild('InputCantidad',{static:false})cantidadIngredienteRef : ElementRef;
  @Output() ingredienteagregar = new EventEmitter<Ingrediente>();

  constructor() { }

  ngOnInit(): void {
  }

  onAgregar(){
    const ingName =  this.nombreIngredienteRef.nativeElement.value;
    const cantidading =  this.cantidadIngredienteRef.nativeElement.value;
    const nuevoingrediente = new Ingrediente(ingName, cantidading);
    this.ingredienteagregar.emit(nuevoingrediente);
  }

}
