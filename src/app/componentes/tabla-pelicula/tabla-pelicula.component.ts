import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() tabla!:any;
  @Output() enviarPeliculaDesdeTabla : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  send(item:any){
    //console.info(item)
    this.enviarPeliculaDesdeTabla.emit(item);
  }

}
