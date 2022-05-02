import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDataComponent} from "./patient-data/patient-data.component";
import {CalculatedVolumeComponent} from "./calculated-volume/calculated-volume.component";
import {AboutComponent} from "./about/about.component";
import {EventListComponent} from "./event-list/event-list.component";

const routes: Routes = [
  { path: 'patientData', component: PatientDataComponent  },
  { path: 'calculatedVolume', component: CalculatedVolumeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'eventList', component: EventListComponent},
  { path: '', redirectTo: 'patientData', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
