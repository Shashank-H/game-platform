import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    GameCardComponent,
  ]
})
export class ComponentsModule { }
