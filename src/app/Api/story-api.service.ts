import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';
import { IStory } from '../models/story';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {

constructor( private http: HttpClient) { }

addStory(story: IStory): Observable<IStory> {
  //   const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //   })
  // };
  return this.http.post<IStory>(`${environment.apiBaseUrl}/api/story/AddStory`, story);
}

}
