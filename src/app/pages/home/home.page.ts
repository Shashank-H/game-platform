import { Component, OnInit } from '@angular/core';
import { games } from 'src/app/Interfaces/game-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  gameList=games;

  constructor() { }

  ngOnInit() {
    console.log(games);
    
  }

}
