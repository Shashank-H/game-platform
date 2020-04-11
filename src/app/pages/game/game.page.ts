import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  id;
  link;
  name;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private sanitizer: DomSanitizer,
    private _gameService: GameService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this._gameService.getGameById(this.id).then((value: any) => {
        this.name = value.name;
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(value.link);
      });
    }

  }

  goBack() {
    this._router.navigate(["/home"])
  }

}
