import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = []

  constructor(private _spotifyService: SpotifyService) { }

  buscar(termino: string){
    console.log(termino);
    if(termino.length > 0){
      this._spotifyService.getArtist(termino)
        .subscribe( (data: any)  => {
          this.artists = data;
        });
    }
  }

}
