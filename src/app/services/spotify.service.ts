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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAHxfRt4M_hKoohFn3Z_WhtAvfbm4_kbTTNuPDBCr7CR0LD3IukXj1aEy8YiHxGpdS1BVGHEpP_Uoe7cTo'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                .pipe( map( data => data['albums'].items ));

  }

  getArtist( termino:string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAHxfRt4M_hKoohFn3Z_WhtAvfbm4_kbTTNuPDBCr7CR0LD3IukXj1aEy8YiHxGpdS1BVGHEpP_Uoe7cTo'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=10`, { headers })
                .pipe(map( data => data['artists'].items ));
  }
}
