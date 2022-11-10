import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolinerasListComponent } from './components/gasolineras-list/gasolineras-list.component';

const routes: Routes = [
  {path: '', component: GasolinerasListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
