import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
