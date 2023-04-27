import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  listaPeliculas!:any[];
  peliculaParaMostrar:any = {};

    id!:number;
    nombre!:string;
    tipo!:string;
    fechaEstreno!:string;
    publico!:number;
    foto!:string;

  constructor() {
    this.listaPeliculas = [
      {id: 0, nombre: "Titanic", tipo:"drama", fechaEstreno: "10/10/1990", publico: 2000000, foto: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"},
      {id: 1, nombre: "Scream 4", tipo:"humor", fechaEstreno: "10/10/1990", publico: 2000000, foto: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iENnwz4Xa0DDnarnWIFvMdgOJAi.jpg"},
    ];
   }

  ngOnInit(): void {
  }

  asignarADetalle($event:any){
    this.peliculaParaMostrar = $event;
    console.info($event);
  }

}
