import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

  public Editor = ClassicEditor;
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {}

  goToEpisode() {
    this.router.navigateByUrl('/add-episode/14');
  }

  navigateToCreateEpisode(){
    this.router.navigateByUrl('//add-episode');
  }

}
