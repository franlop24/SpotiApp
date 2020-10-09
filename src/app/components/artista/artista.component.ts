import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(private router: ActivatedRoute,
              private _spotifyService: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string){
    this._spotifyService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
  }

  getTopTracks(id:string){
    this._spotifyService.getTopTracks(id)
        .subscribe(tracks => {
          this.topTracks = tracks;
          console.log(this.topTracks);
        });
  }

}
