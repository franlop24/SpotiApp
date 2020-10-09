import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service Created');
  }

  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBiROzMdrxPH7nHRgawamcpF1y-P41uirQEIp9u0O5Ffyxg9FAi7fjl5wiiqRxA6aNubHKA-KsNYqY3B9Q'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }

  getArtists( termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
                .pipe(map( data => data['artists'].items ));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }

}
