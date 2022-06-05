import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientDataComponent} from "./pages/patient-data/patient-data.component";
import {PatientViewComponent} from "./pages/patient-view/patient-view.component";
import {AboutComponent} from "./pages/about/about.component";
import {EventListComponent} from "./pages/event-list/event-list.component";

const routes: Routes = [
  { path: 'patientData', component: PatientDataComponent  },
  { path: 'patientData/peso/:peso', component: PatientDataComponent},
  { path: 'patientView', component: PatientViewComponent},
  { path: 'patientView/peso/:peso', component: PatientViewComponent},
  { path: 'about', component: AboutComponent},
  { path: 'eventList', component: EventListComponent},
  { path: '', redirectTo: 'patientData', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
