import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CseComponent } from './cr-elections/cse/cse.component';
import { MechComponent } from './cr-elections/mech/mech.component';
import { EceComponent } from './cr-elections/ece/ece.component';
import { PresidentComponent } from './general-elections/president/president.component';
import { VicePresidentComponent } from './general-elections/vice-president/vice-president.component';

const routes: Routes = [
	{ path: 'cr-elections/cse', component: CseComponent},
	{ path: 'cr-elections/mech', component: MechComponent},
	{ path: 'cr-elections/ece', component: EceComponent},
	{ path: 'general-elections/president', component: PresidentComponent},
	{ path: 'general-elections/vice-president', component: VicePresidentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
