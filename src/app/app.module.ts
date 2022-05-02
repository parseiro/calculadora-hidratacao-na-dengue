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
import {AppShellRenderDirective} from "./directives/app-shell-render.directive";
import {AppShellNoRenderDirective} from "./directives/app-shell-no-render.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PatientDataComponent,
    CalculatedVolumeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    EventListComponent,
    EventThumbnailComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
