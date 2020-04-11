import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {

  @Input() game;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  openGame(){
    this._router.navigate(['/game',this.game.id]);
  }

}
