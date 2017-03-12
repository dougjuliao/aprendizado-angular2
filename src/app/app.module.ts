import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListaModule } from './lista/lista.module';

import { AppComponent } from './app.component';
import { MeuComponent } from './meu-component/meu.component';
import { MeuCompCriadoCliComponent } from './meu-comp-criado-cli/meu-comp-criado-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponent,
    MeuCompCriadoCliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
