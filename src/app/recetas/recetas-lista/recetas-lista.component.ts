import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { recetas } from '../recetas.model'
@Component({
  selector: 'app-recetas-lista',
  templateUrl: './recetas-lista.component.html',
  styleUrls: ['./recetas-lista.component.css']
})
export class RecetasListaComponent implements OnInit {
  @Output() Recetaquefueseleccionada =  new EventEmitter<recetas>();
  Recetas: recetas[] = [
    new recetas('Esto es una receta', 'testeo de receta', 'https://www.annarecetasfaciles.com/files/croquetas-jamon-815x458.jpg'),
    new recetas('Esta es la receta final', 'testeo de receta', 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-de-comida-para-llevar-al-trabajo.jpg')
  ]

  constructor () { }

  ngOnInit (): void {
  }

  onRecetaSeleccionada (receta: recetas) {
    this.Recetaquefueseleccionada.emit(receta)
  }
}
