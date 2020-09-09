import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-episodes',
  templateUrl: './create-episodes.component.html',
  styleUrls: ['./create-episodes.component.scss']
})
export class CreateEpisodesComponent implements OnInit {

  public activeRoutes: ActivatedRoute;
  public storyId: string;
  public isStorySelected: boolean;

  constructor(activeRoutes: ActivatedRoute) {
    this.activeRoutes = activeRoutes;

  }


  ngOnInit() {
    this.activeRoutes.queryParams.subscribe(param => {
      this.storyId = param['id'];
      if (this.storyId) {
        return true;
      } else {
        return false;
      }
    });
  }

  // this.activeRoutes.queryParams.subscribe(params => {
  //   this.storyId = params['id'];
  //   console.log('id', this.storyId);
  //   });
  //   if (this.storyId) {
  //     this.isStorySelected = true;
  //   } else {
  //     this.isStorySelected = false;
  //   }

  // this.activeRoutes.paramMap.pipe(
  //   switchMap(params => {
  //     this.storyId = params['id'];
  //   })
  // );
  }
