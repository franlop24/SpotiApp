import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private _spotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;
    this._spotifyService.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, (errorService) => {
          this.error = true
          console.log(errorService);
          this.mensajeError = errorService.error.error.message;
        });
  }

  ngOnInit(): void {
  }

}
