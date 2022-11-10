import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasolinerasResponse } from '../models/gasolineras-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GasolinerasListService {

  constructor(private http: HttpClient) { }


  getAll():Observable<GasolinerasResponse> {
    return this.http.get<GasolinerasResponse>(`${environment.DATA_URL}`);
  }
}
