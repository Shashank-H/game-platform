import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  id;
  constructor(private route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
  }

  goBack(){
    this._router.navigate(["/home"])
  }

}
