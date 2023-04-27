import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/listado/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';


const routes: Routes = [
  { path: '', component: BienvenidoComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'peliculas/alta', component: PeliculaAltaComponent},
  { path: 'actor/alta', component: ActorAltaComponent},
  { path: 'actor/listado', component: ActorListadoComponent},
  { path: 'peliculas/listado', component: PeliculaListadoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
