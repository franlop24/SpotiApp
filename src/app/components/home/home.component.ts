import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases();
  }

  ngOnInit(): void {
  }

}
