import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    console.log('Spotify Service Created');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBpBxXKLRXMM9AOmdSZ35pKCaabW-3gfjomdFuuZ4dR3CYAE_KkXvuObEzSB_O6yDADRjuf1mn8BYwv1uY'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe( data => {
          console.log(data);
        });
  }
}
