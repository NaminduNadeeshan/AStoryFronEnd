import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';
import { IStory, IStoryByAuther } from '../models/story';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IApprovedStoryAndEpisode, IApprovedStoryAndEpisodeResponse } from '../models/approved-story-and-episode';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {

constructor( private http: HttpClient) { }

addStory(story: IStory): Observable<IStory> {
  return this.http.post<IStory>(`${environment.apiBaseUrl}/api/story/AddStory`, story);
}

getStoriesByAuther(autherId: number, skip: number, take: number): Observable<IStoryByAuther> {
  return this.http.get<IStoryByAuther>(`${environment.apiBaseUrl}/api/story/getStoriesByAutherId/${autherId.toString()}`);
}

getStoriesByAutherId(autherId: number): Observable<IStoryByAuther> {
  return this.http.get<IStoryByAuther>(`${environment.apiBaseUrl}/api/story/getStoriesByAutherId/${autherId}`);
}

approveStoryAndEpisode(data: IApprovedStoryAndEpisode): Observable<IApprovedStoryAndEpisodeResponse> {
  return this.http.post<IApprovedStoryAndEpisodeResponse>(`${environment.apiBaseUrl}/api/story/approve`, data);
}

superAutherStories(): Observable<IStory[]> {
  return this.http.get<IStory[]>(`${environment.apiBaseUrl}/api/story/GetAllStoriesForSupperUser`);
}

}
