import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { promises } from 'dns';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { CreatorComponent } from './creator/creator.component';
import { MapComponent } from './map/map.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: 'creator',
    component: CreatorComponent
  },
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
