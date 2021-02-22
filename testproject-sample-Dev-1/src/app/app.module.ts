import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FusesaverComponent } from 'src/fusesaver/fusesaver.component';
import { from } from 'rxjs';
import { HomepageComponent } from 'src/homepage/homepage.component';
import { TripsaverComponent } from 'src/tripsaver/tripsaver.component';
import { SwitchComponent } from 'src/switch/switch.component';
import { SectionalizerComponent } from 'src/sectionalizer/sectionalizer.component';
import { CircuitBreakerComponent } from 'src/circuit-breaker/circuit-breaker.component';
import { InterrupterElastimoldComponent } from 'src/interrupter-elastimold/interrupter-elastimold.component';
import { InterrupterSelComponent } from 'src/interrupter-sel/interrupter-sel.component';
import { RegulatorComponent } from 'src/regulator/regulator.component';
import { Http, Response } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapacitorComponent } from 'src/capacitor/capacitor.component';
import { RecloserCooperComponent } from 'src/recloser-cooper/recloser-cooper.component';
import { RecloserBeckComponent } from 'src/recloser-beck/recloser-beck.component';

@NgModule({
  declarations: [
    AppComponent,
    FusesaverComponent,
    HomepageComponent,
    TripsaverComponent,
    SwitchComponent,
    SectionalizerComponent,
    CircuitBreakerComponent,
    InterrupterElastimoldComponent,
    InterrupterSelComponent,
    RegulatorComponent,
    CapacitorComponent,
    RecloserCooperComponent,
    RecloserBeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
