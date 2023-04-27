import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() listaRecibida!:any;
  @Output() enviarPeliculaRecibidaDeTabla : EventEmitter<any> = new EventEmitter<any>();

  peliculaParaMostrar:any = {};

  constructor() { }

  ngOnInit(): void {
  }

  enviarABusqueda($event:any){
    //console.info(item)
    this.enviarPeliculaRecibidaDeTabla.emit($event);
  }

}
