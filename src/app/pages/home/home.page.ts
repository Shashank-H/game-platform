import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  gameList: any[] = []

  constructor(private _gameService: GameService) { }

  ngOnInit() {
   
    this._gameService.getGames().then((games: any) => {
      this.gameList = games;
    }).catch(console.error)
    
  }

}
