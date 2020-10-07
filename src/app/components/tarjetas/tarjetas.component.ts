import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent {

  @Input() items: any[] = []

  constructor() { }

  verArtista(item: any){

    let artistaId;

    if(item.type === 'artist'){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id
;    }
    console.log(artistaId);
  }

}
