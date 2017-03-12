import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './lista.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	ListaComponent,
  	InfoComponent
  ],
  exports: [
  	ListaComponent
  ]
})
export class ListaModule { }
