import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IStory, IStoryByAuther } from 'src/app/models/story';
import { StoryApiService } from 'src/app/Api/story-api.service';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { EpisodeApiService } from 'src/app/Api/episode-api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-create-episodes',
  templateUrl: './create-episodes.component.html',
  styleUrls: ['./create-episodes.component.scss']
})
export class CreateEpisodesComponent implements OnInit {

  public storyName: string;
  public Editor = ClassicEditor;
  public Editor1 = ClassicEditor;
  public activeRoutes: ActivatedRoute;
  public storyId: string;
  public episodeForm: FormGroup;
  public storiesByAuther: IStory[];
  public isSubmitting: boolean;
  public isSubmitted: boolean;

  constructor(activeRoutes: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private storyApi: StoryApiService,
    private episodeApi: EpisodeApiService
  ) {
    this.activeRoutes = activeRoutes;
    this.isSubmitting = false;
    this.isSubmitted = false;
  }


  ngOnInit() {
    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }
    this.isRouterContentId();

    this.episodeForm = this.formBuilder.group({
      episodeName: ['', Validators.required],
      episodeShortDescription: ['', Validators.required],
      episodeCoverImageUrl: ['', Validators.required],
      episodeContent: ['', Validators.required],
      storyId: [this.storyId ? +this.storyId : '', Validators.required]
    });
  }

  isRouterContentId() {
    this.activeRoutes.params.subscribe(params => {
      this.storyId = params['id'];
      this.storyName = params['storyName'];

      if (!this.storyId) {
        this.getStoriesByAutherToCombo();
      }

    });
  }

  addEpiosode() {

    this.isSubmitted = true;
    if (this.episodeForm.valid) {
      this.isSubmitting = true;
      this.episodeApi.addepisode(this.episodeForm.value).subscribe(response => {
        Swal.fire(
          'Successfuly added Episode.',
          '',
          'success'
        );
        this.isSubmitting = false;
      }, error => {
        Swal.fire(
          'Fail to add Episode.',
          'Please check your are online, or contact us.',
          'error'
        );
        this.isSubmitting = false;
        console.error(console.error(error));
      });
      this.isSubmitted = false;
    }

  }

  getStoriesByAutherToCombo() {
    this.storyApi.
      getStoriesByAuther(JSON.parse(localStorage.getItem('user')).autherId, 1, 2)
      .subscribe(response => { this.storiesByAuther = response[0].stories; });
  }

  onCHangeEpisodeShortDes({ editor }: ChangeEvent) {
    const Editor = editor.getData();
    this.episodeForm.get('episodeShortDescription').setValue(Editor);
  }

  onChangeEpisodeContent({ editor }: ChangeEvent) {
    const Editor = editor.getData();
    this.episodeForm.get('episodeContent').setValue(Editor);
  }

  selectStory(e) {
    this.episodeForm.get('storyId').setValue(+e.target.value);
  }

}
