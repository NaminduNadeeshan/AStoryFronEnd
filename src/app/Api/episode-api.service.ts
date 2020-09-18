import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode } from '../models/episode';
import { ApiWrapperService } from './api-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeApiService {

constructor(private wrapperHttp: ApiWrapperService) { }

// addepisode(episode: IEpisode): Observable<IEpisode> {
//   return this.wrapperHttp.postWrapper<IEpisode>(episode, 'api/Episode/AddEpisode', true);
// }

}
