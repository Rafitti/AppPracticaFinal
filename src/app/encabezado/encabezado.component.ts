import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent {
  @Output() featureSelected = new EventEmitter<string>()
  collapsed = true

  onSelect (feature: string) {
    this.featureSelected.emit(feature)
  }
}
