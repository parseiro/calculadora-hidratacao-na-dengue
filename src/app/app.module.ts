import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDataComponent } from './pages/patient-data/patient-data.component';
import { CalculatedVolumeComponent } from './pages/calculated-volume/calculated-volume.component';
import { NavbarComponent } from './components/app-navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import {AppShellRenderDirective} from "./directives/app-shell-render.directive";
import {AppShellNoRenderDirective} from "./directives/app-shell-no-render.directive";
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {CommonModule, registerLocaleData} from '@angular/common';
import localePT from '@angular/common/locales/pt';
import {WeightDirective} from "./directives/weight.directive";

registerLocaleData(localePT, 'pt-BR');


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
    WeightDirective,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
