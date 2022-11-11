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

  displayedColumns: string[] = [
    'rotulo', 
    'localidad', 
    'provincia',
    'precioBiodiesel',
    'precioBioetanol',
    'precioGasNaturalComprimido',
    'precioGasesLicuadosDelPetroleo',
    'precioGasoleoA',
    'precioGasoleoB',
    'precioGasoleoPremium',
    'precioGasolina95E10',
    'precioGasolina95E5',
    'precioGasolina95E5Premium',
    'precioGasolina98E10',
    'precioGasolina98E5'
  ];

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
