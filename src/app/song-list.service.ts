import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongListService {

  constructor(private http: HttpClient) { }
  getAllSongs(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/songList');
  }
}
