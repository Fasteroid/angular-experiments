import { Component, EventEmitter } from '@angular/core';
import { BruhpdaterService } from '../services/bruhpdater.service';

@Component({
  selector: 'app-bruh',
  templateUrl: './bruh.component.html',
  styleUrls: ['./bruh.component.scss']
})
export class BruhComponent {

  the_thing: string = "nothing yet"

  constructor(br: BruhpdaterService){
    br.bruh_updates.subscribe(upd => {
      this.the_thing = upd;
    })
  }

}
