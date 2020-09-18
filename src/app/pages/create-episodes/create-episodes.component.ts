import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-episodes',
  templateUrl: './create-episodes.component.html',
  styleUrls: ['./create-episodes.component.scss']
})
export class CreateEpisodesComponent implements OnInit {

  public storyName: string;
  public activeRoutes: ActivatedRoute;
  public storyId: string;
  public isStorySelected: boolean;
  public episodeForm: FormGroup;
  @ViewChild('content') content: string;

  constructor(activeRoutes: ActivatedRoute, private authService: AuthService, private router: Router,
    private formBuilder: FormBuilder) {
    this.activeRoutes = activeRoutes;
    this.episodeForm  = this.formBuilder.group({
      episodeName: ['', Validators.required],
      episodeShortDescription: ['', Validators.required],
      episodeCoverImageUrl: ['', Validators.required],
      episodeContent: ['', Validators.required],
      storyId: this.storyId,
      episodeId: undefined
    });

  }


  ngOnInit() {
    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }
    this.isRouterContentId();
  }

  isRouterContentId() {
    this.activeRoutes.params.subscribe(params => {
      this.storyId = params['id'];
      this.storyName = params['storyName'];
    });
  }

  addEpiosode() {
    console.log('content', this.content);
  }

  }
