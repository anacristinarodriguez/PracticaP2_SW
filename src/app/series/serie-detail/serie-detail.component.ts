import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  selectedSerie!: Serie;
  selected = false;

  @Input() serieDetail!: Serie;



  constructor() { }

  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
  }

}
