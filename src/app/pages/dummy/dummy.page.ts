import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.page.html',
  styleUrls: ['./dummy.page.scss'],
})
export class DummyPage implements OnInit {

  private _gameURL: any;

  constructor(private _gameService: GameService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if (id) {
      this._gameService.getGameById(id).then((value: any) => {
        console.log(value)
        this._gameURL = this.sanitizer.bypassSecurityTrustResourceUrl(value.hostingURL);
      });
    }
  }

  get accessGameURL() {
    return this._gameURL;
  }

}
