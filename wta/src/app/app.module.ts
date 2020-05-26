import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { BaseComponent } from './base/base.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CseComponent } from './cr-elections/cse/cse.component';
import { PresidentComponent } from './general-elections/president/president.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MechComponent } from './cr-elections/mech/mech.component';
import { VicePresidentComponent } from './general-elections/vice-president/vice-president.component';
import { EceComponent } from './cr-elections/ece/ece.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CseComponent,
    PresidentComponent,
    MechComponent,
    VicePresidentComponent,
    EceComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTreeModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
