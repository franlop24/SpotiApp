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
      'Authorization': 'Bearer BQBmtwV9j0MPIBGkr46N68asMsGZb5TKnkEUF7xGLsO73LST4NPMN5GNlAy2sEKRMpIj4LbUeJ3RvQ91yPw'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }

  getArtist( termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
                .pipe(map( data => data['artists'].items ));
  }

}
