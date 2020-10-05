import { Component, OnInit } from '@angular/core';
import { IStory } from 'src/app/models/story';

@Component({
  selector: 'app-header-chart',
  templateUrl: './header-chart.component.html',
  styleUrls: ['./header-chart.component.scss']
})
export class HeaderChartComponent implements OnInit {

  public stories: IStory[];
  constructor() { }

  ngOnInit() {
    this.stories = JSON.parse(localStorage.getItem('stories'));
  }

}
