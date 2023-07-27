import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BruhpdaterService {

  constructor() { }

  bruh_updates: EventEmitter<any> = new EventEmitter<any>(true);
  
  bruhpdate(value: any){
    this.bruh_updates.emit(value)
  }

}
