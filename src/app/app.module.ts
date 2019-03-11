import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { IcecreamBattleComponent } from './icecream-battle/icecream-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    PipeDemoComponent,
    IcecreamBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
