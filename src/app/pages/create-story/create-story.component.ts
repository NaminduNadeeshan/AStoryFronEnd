import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';

declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent implements OnInit {

  public Editor = ClassicEditor;
  public router: Router;

  constructor(router: Router, private authService: AuthService, ) {
    this.router = router;
  }

  ngOnInit() {
    if (!this.authService.isSignedInUser()) {
      this.router.navigate(['/login']);
    }
  }

  goToEpisode() {
    this.router.navigateByUrl('/add-episode/14');
  }

  navigateToCreateEpisode(){
    this.router.navigateByUrl('//add-episode');
  }

}
