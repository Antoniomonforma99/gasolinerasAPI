import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/gasolineras-response.interface';
import { GasolinerasListService } from 'src/app/services/gasolineras-list.service';

@Component({
  selector: 'app-gasolineras-list',
  templateUrl: './gasolineras-list.component.html',
  styleUrls: ['./gasolineras-list.component.css']
})
export class GasolinerasListComponent implements OnInit {

  gasolinerasList: Gasolinera[] = [];

  constructor(private gasolinerasListService: GasolinerasListService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.gasolinerasListService.getAll().subscribe((res) => {
      this.gasolinerasList =  res.ListaEESSPrecio;
    })
  }

}
