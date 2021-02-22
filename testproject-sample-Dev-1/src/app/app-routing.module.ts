import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FusesaverComponent } from "src/fusesaver/fusesaver.component";

import { HomepageComponent } from "src/homepage/homepage.component";
import { TripsaverComponent } from "src/tripsaver/tripsaver.component"
import { SwitchComponent } from 'src/switch/switch.component';
import { SectionalizerComponent } from 'src/sectionalizer/sectionalizer.component';
import { CircuitBreakerComponent } from 'src/circuit-breaker/circuit-breaker.component';
import { InterrupterElastimoldComponent } from 'src/interrupter-elastimold/interrupter-elastimold.component';
import { InterrupterSelComponent } from 'src/interrupter-sel/interrupter-sel.component';
import { RegulatorComponent } from 'src/regulator/regulator.component';
import { CapacitorComponent } from 'src/capacitor/capacitor.component';
import { RecloserCooperComponent } from 'src/recloser-cooper/recloser-cooper.component';
import { RecloserBeckComponent } from 'src/recloser-beck/recloser-beck.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: 'fusesaver', component: FusesaverComponent },

  { path: '', component: HomepageComponent },
  { path: 'tripsaver', component: TripsaverComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'sectionalizer', component: SectionalizerComponent },
  { path: 'circuitbreaker', component: CircuitBreakerComponent },
  { path: 'intelasti', component: InterrupterElastimoldComponent },
  { path: 'intsel', component: InterrupterSelComponent },
  { path: 'regulator', component: RegulatorComponent },
  { path: 'capacitor', component: CapacitorComponent },
  { path: 'recloser-beck', component: RecloserBeckComponent },
  { path: 'recloser-cooper', component: RecloserCooperComponent },
  { path: 'switch', component: SwitchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
