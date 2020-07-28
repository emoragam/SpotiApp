import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient) { }

  getQuery(query: string, params?: HttpParams){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCcN9ZxfmthK1oeMNCRIUoTTnfenp-22wwb6HzV9fqI53i8ii6bHpXL6DAIYPYODgISnsxcXTJVxykPwNs'
    });

    return this.httpClient.get(url, { headers, params });
  }

  getNewReleases(){
    const params = new HttpParams()
      .set('country', 'CR')
      .set('limit', '20');
    const query = 'browse/new-releases';
    return this.getQuery(query, params)
      .pipe(map( data => data['albums'].items ));
  }

  getArtist(artist: string){
    const params = new HttpParams()
      .set('q', artist)
      .set('type', 'artist');
    const query = 'search';
    return this.getQuery(query, params)
      .pipe(map( data => data['artists'].items ));
  }
  getArtistId(id: string){
    const query = `artists/${id}`;
    return this.getQuery(query)
      .pipe(map( data => data));
  }
  getTopTracks(id: string){
    const query = `artists/${id}/top-tracks`;
    const params = new HttpParams()
      .set('country', 'CR')
    return this.getQuery(query, params).
      pipe(map( data => data['tracks']));
  }
}
