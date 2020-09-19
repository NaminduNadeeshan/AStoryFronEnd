import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEpisode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeApiService {

constructor(private http: HttpClient) { }

addepisode(episode: IEpisode): Observable<IEpisode> {
  return this.http.post<IEpisode>(`${environment.apiBaseUrl}/api/Episode/AddEpisode`, episode);
}

}
