import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';
import { IStory } from '../models/story';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {

constructor( private wrapperHttp: ApiWrapperService) { }

addStory(story: IStory): Observable<IStory> {
  return this.wrapperHttp.postWrapper<IStory>(story, 'api/story/AddStory', true);
}

}
