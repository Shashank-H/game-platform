import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  games: any[] = [
    {
        id: "1",
        name: "Waffle Words",
        image: "https://3.bp.blogspot.com/-ohdT2MvumUg/U9wWsmBygjI/AAAAAAAAAE0/mwKNhcCEaLg/s1600/IMG_2384.PNG",
        link: "https://play.gamepix.com/waffle-words/embed?pid=10013&sid=20015"
    },
    {
        id: "2",
        name: "Valiant Knight",
        image: "https://forum.quartertothree.com/uploads/default/original/3X/d/5/d585d83334e22e0fe26b50a6ef9cf6155fdb56fe.jpg",
        link: "https://play.gamepix.com/valiant-knight/embed?pid=10013&sid=20015"
    },
    {
        id: "3",
        name: "Waffle Words",
        image: "https://external-preview.redd.it/_lWndSyBc4kqMBVTGHC3qSb-0bRORr599hLF8ior-nw.jpg?auto=webp&s=00b1b71e9ca4bc58c6891875cd84199d9ad9f6cd",
        link: "https://play.gamepix.com/waffle-words/embed?pid=10013&sid=20015"
    },
    {
        id: "4",
        name: "Valiant Knight",
        image: "https://www.techquila.co.in/wp-content/uploads/Geralt-2.jpeg",
        link: "https://play.gamepix.com/valiant-knight/embed?pid=10013&sid=20015"
    },
    {
        id: "5",
        name: "Waffle Words",
        image: "https://i.pinimg.com/736x/fd/cd/90/fdcd90e64c491117a3ed9353ba014847.jpg",
        link: "https://play.gamepix.com/waffle-words/embed?pid=10013&sid=20015"
    },
    {
        id: "6",
        name: "Valiant Knight",
        image: "https://c4.wallpaperflare.com/wallpaper/18/694/476/digital-art-artwork-portrait-video-games-wallpaper-preview.jpg",
        link: "https://play.gamepix.com/valiant-knight/embed?pid=10013&sid=20015"
    },
]

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
