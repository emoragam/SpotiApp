import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artist: string = '';
  artists: any[] = [];
  loading: boolean;

  constructor( private service: SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(){
    if (this.artist){
      this.loading = true;
      this.service.getArtist(this.artist).subscribe( (data): any => {
        this.artists = data;
        this.loading = false;
      });
    }
  }
}
