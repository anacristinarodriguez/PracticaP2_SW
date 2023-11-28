//Agrego el import de SerieService y Serie
//Agrego el constructor y la funcion getSeries
//Agrego el ngOnInit con la funcion getSeries
//Agrego el onSelected para el detail 

import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  selectedSerie!: Serie;

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  onSelectSerie(serie: Serie) {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
