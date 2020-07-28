import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private service: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string){
    this.service.getArtistId(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }
  getTopTracks(id: string){
    this.service.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });
  }
}
