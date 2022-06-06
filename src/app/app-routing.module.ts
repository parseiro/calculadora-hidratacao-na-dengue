import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientEditComponent} from "./pages/patient-edit/patient-edit.component";
import {PatientViewComponent} from "./pages/patient-view/patient-view.component";
import {AboutComponent} from "./pages/about/about.component";
import {EventListComponent} from "./pages/event-list/event-list.component";
import {PatientListComponent} from "./pages/patient-list/patient-list.component";

const routes: Routes = [
  { path: 'patientEdit', component: PatientEditComponent  },
  { path: 'patientEdit/:id', component: PatientEditComponent},
  { path: 'patientView', component: PatientViewComponent},
  { path: 'patientView/:id', component: PatientViewComponent},
  { path: 'about', component: AboutComponent},
  { path: 'eventList', component: EventListComponent},
  { path: 'patientList', component: PatientListComponent},
  { path: '', redirectTo: 'patientList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
