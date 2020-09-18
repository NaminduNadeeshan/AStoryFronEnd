import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';
import { StoryApiService } from 'src/app/Api/story-api.service';
import { IStory } from 'src/app/models/story';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/dist/types/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

  public Editor = ClassicEditor;
  public router: Router;
  public storyForm: FormGroup;
  public user: IUser;
  public storyDescription: string;
  public isSubmited: boolean;
  public isSubmitting: boolean;

  constructor(router: Router, private authService: AuthService, private storyApi: StoryApiService,
    private formBuilder: FormBuilder) {

    this.router = router;
    this.isSubmited = false;
    this.isSubmitting = false;
  }

  ngOnInit() {
    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }
    this.storyForm = this.formBuilder.group({
      storyName: ['', Validators.required],
      storyShortDescription: ['', Validators.required],
      coverImageUrl: ['', Validators.required],
      isActive: [true],
      autherId: ['']
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.storyApi.
    getStoriesByAuther(JSON.parse(localStorage.getItem('user')).autherId, 1, 2).subscribe(response => console.log(response));
  }

  goToEpisode(storyId: number, storyName: string) {
    this.router.navigateByUrl(`/add-episode/${storyId}/${storyName}`);
  }

  navigateToCreateEpisode() {
    this.router.navigateByUrl('/add-episode');
  }

  addStory() {
    this.isSubmited = true;
    if (this.storyForm.valid) {
      this.isSubmitting = true;
      const user = JSON.parse(localStorage.getItem('user'));

      const story: IStory = {
        autherId: user.autherId,
        coverImageUrl: this.storyForm.value['coverImageUrl'],
        isActive: this.storyForm.value['isActive'],
        storyName: this.storyForm.value['storyName'],
        storyShortDescription: this.storyForm.value['storyShortDescription'],
        storyId: undefined
      };
      this.storyApi.addStory(story)
        .subscribe(response => {
          Swal.fire(
            'Successfuly added story. Add episodes from here.',
            '',
            'success'
          );
          this.goToEpisode(response.storyId, response.storyName);
        }, err => {console.log('error', err); this.isSubmitting = false; });
      this.isSubmited = false;
    }
  }

  change({ editor }: ChangeEvent) {
    const EditorData = editor.getData();
    this.storyForm.get('storyShortDescription').setValue(EditorData);
  }

}
