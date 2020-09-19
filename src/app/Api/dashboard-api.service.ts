import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStoryByAuther } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

constructor(private http: HttpClient) {
}

}
