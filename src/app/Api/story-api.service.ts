import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';
import { IStory, IStoryByAuther } from '../models/story';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}
