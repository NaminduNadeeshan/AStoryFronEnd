import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';
import { StoryApiService } from 'src/app/Api/story-api.service';
import { IStory } from 'src/app/models/story';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/User';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

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
  public validationStatus: any;

  constructor(router: Router, private authService: AuthService, private storyApi: StoryApiService, 
    private formBuilder: FormBuilder) {

    this.router = router;
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
  }

  goToEpisode(storyId: number) {
    this.router.navigateByUrl(`/add-episode/${storyId}`);
  }

  navigateToCreateEpisode() {
    this.router.navigateByUrl('/add-episode');
  }

  addStory() {
  this.validationStatus = this.storyForm.controls;
   console.log('error', this.validationStatus.storyName.error?.required);
    if (this.storyForm.valid) {
      const user = JSON.parse(localStorage.getItem('user'));

      const story: IStory = {
        autherId: user.autherId,
        coverImageUrl: this.storyForm.value['coverImageUrl'],
        isActive: this.storyForm.value['isActive'],
        storyName: this.storyForm.value['storyName'],
        storyShortDescription: this.storyForm.value['storyShortDescription'],
        storyId: undefined
      };
     this.storyApi.addStory(story).subscribe(response => {
       this.goToEpisode(response.storyId);
     });
    }
  }

change({editor}: ChangeEvent) {
  const EditorData = editor.getData();
  console.log('ammata siri', EditorData);
  this.storyForm.get('storyShortDescription').setValue(EditorData);
}

}
