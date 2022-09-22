import { Component, Input, OnInit } from '@angular/core'
import { recetas } from '../recetas.model'

@Component({
  selector: 'app-recetas-detalle',
  templateUrl: './recetas-detalle.component.html',
  styleUrls: ['./recetas-detalle.component.css']
})
export class RecetasDetalleComponent implements OnInit {
  @Input() receta:recetas;
  constructor() { }

  ngOnInit(): void {
  }

}
