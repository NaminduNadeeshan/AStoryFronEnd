import { Component, OnInit } from '@angular/core';
import { StoryApiService } from 'src/app/Api/story-api.service';
import { IApprovedStoryAndEpisode } from 'src/app/models/approved-story-and-episode';
import { IStory } from 'src/app/models/story';
import { IUserResponse } from 'src/app/models/User';

@Component({
  selector: 'app-story-table',
  templateUrl: './story-table.component.html',
  styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent implements OnInit {
  public allStories: IStory[];
  public user: IUserResponse;
  public isLoading: boolean;
  public isApprove: boolean;

  constructor(private storyApi: StoryApiService) {
    this.isLoading = false;
    this.isApprove = false;
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getSigninUserStories();
  }

  getSigninUserStories() {
    this.isLoading = true;
    if (this.user.isSuperAUther) {
      this.storyApi.superAutherStories().subscribe(story => {
        this.allStories = story;
        localStorage.setItem('stories', JSON.stringify(story));
        this.isLoading = false;
      });
    } else {
      this.storyApi.getStoriesByAutherId(this.user.autherId).subscribe(res => {
        this.allStories = res[0].stories;
        this.isLoading = false;
        localStorage.setItem('stories', JSON.stringify(this.allStories = res[0].stories));
      });
    }

  }

  onAprrove(storyId: number) {

    this.isApprove = true;
    const approve: IApprovedStoryAndEpisode = {
      aprrovedBy: this.user.autherId,
      aprrovedType: 'story',
      propertyId: storyId,
      value: true
    };

    this.storyApi.approveStoryAndEpisode(approve).subscribe(res => {
      if (res.isSuccess) {
        this.realTimeStoryUpdate(storyId);

        this.isApprove = false;
      }
    });
  }

  realTimeStoryUpdate(storyId: number) {
    this.allStories = JSON.parse(localStorage.getItem('stories'));
    this.allStories.map((data, key) => {
      if (data.storyId === storyId) {
        data.isActive = true;
      }
    });
    localStorage.setItem('stories', JSON.stringify(this.allStories));
    this.allStories = JSON.parse(localStorage.getItem('stories'));
  }


}
