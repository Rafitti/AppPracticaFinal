import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { recetas } from '../../recetas.model'

@Component({
  selector: 'app-recetas-item',
  templateUrl: './recetas-item.component.html',
  styleUrls: ['./recetas-item.component.css']
})
export class RecetasItemComponent implements OnInit {
  @Input() receta: recetas
  @Output() recetaSeleccionada = new EventEmitter<void>()
  constructor () { }

  ngOnInit (): void {
  }

   EnSeleccion () {
    this.recetaSeleccionada.emit();
  }
}
