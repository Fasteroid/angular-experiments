import { Component } from '@angular/core';
import { BruhpdaterService } from './services/bruhpdater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  private _br: BruhpdaterService;
  constructor(br: BruhpdaterService){
    this._br = br;
  }

  dewit(){
    this._br.bruhpdate(Math.random())
  }

}
