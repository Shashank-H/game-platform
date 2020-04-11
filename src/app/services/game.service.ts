import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: any[] = [
    {
      id: "101",
      name: "Waffle Words",
      hostingURL: "https://play.gamepix.com/waffle-words/embed?pid=10013&sid=20015"
    },
    {
      id: "201",
      name: "Valiant Knight",
      hostingURL: "https://play.gamepix.com/valiant-knight/embed?pid=10013&sid=20015"
    }
  ];

  constructor() { }


  getGames(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.games)
      }, 350);
    })
  }

  getGameById(id:String): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.games.find(game => game.id === id));
      }, 350);
    })
  }


}
