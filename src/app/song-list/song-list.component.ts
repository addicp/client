import { Component, OnInit } from '@angular/core';
import { SongListService } from '../song-list.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: object[];

  constructor(private songListService: SongListService) { }

  addToList() {

  }

  addSong() {
    
  }

  ngOnInit() {
    let obs = this.songListService.getAllSongs()
    obs.subscribe((data) => {
      this.songs = data
      console.log(this.songs)
    })
  }

}
