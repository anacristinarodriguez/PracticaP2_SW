import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  //arreglo de los nombre de los módulos que necesita
  imports: [
    CommonModule,
    HttpClientModule
  ],
  //valor también es un arreglo de los nombre de los componentes que declara
  declarations: [SerieListComponent,SerieDetailComponent],
  exports:[SerieListComponent,SerieDetailComponent]

})
export class SeriesModule { }
