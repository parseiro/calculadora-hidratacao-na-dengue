import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { CalculatedVolumeComponent } from './calculated-volume/calculated-volume.component';
import { NavbarComponent } from './app-navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDataComponent,
    CalculatedVolumeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
