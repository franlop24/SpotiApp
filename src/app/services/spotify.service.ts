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
      'Authorization': 'Bearer BQCVGeuCWVUank5514CreyrxEQjCLS1wzUlWmsvAAngxBy70mgYDG-u2PiQYA4N5BS2HN1ncKIxdqS-buFw'
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

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
          .pipe(map(data => data['tracks']));
  }
}
