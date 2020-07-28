import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  showArtist(item: any){
    let id: string;
    if (item.type === 'album'){
      id = item.artists[0].id;
    }else if (item.type === 'artist'){
      id = item.id;
    }
    this.router.navigate(['/artist',id]);
  }

}
