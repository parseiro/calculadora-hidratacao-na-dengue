import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { CalculatedVolumeComponent } from './calculated-volume/calculated-volume.component';
import { NavbarComponent } from './app-navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDataComponent,
    CalculatedVolumeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
