import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetasListaComponent } from './recetas/recetas-lista/recetas-lista.component';
import { RecetasDetalleComponent } from './recetas/recetas-detalle/recetas-detalle.component';
import { RecetasItemComponent } from './recetas/recetas-lista/recetas-item/recetas-item.component';
import { ListadecomprasComponent } from './listadecompras/listadecompras.component';
import { ListadecomprasEditComponent } from './listadecompras/listadecompras-edit/listadecompras-edit.component';

@NgModule({
  declarations: [
    AppComponent, 
    EncabezadoComponent,
    RecetasComponent,
    RecetasListaComponent,
    RecetasDetalleComponent,
    RecetasItemComponent,
    ListadecomprasComponent,
    ListadecomprasEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
