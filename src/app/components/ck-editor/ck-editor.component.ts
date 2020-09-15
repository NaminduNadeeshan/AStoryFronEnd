import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from 'node_modules/@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {

  public Editor = ClassicEditor;
  @Input() item: any;
  constructor() { }

  ngOnInit() {
    console.log(this.item.value['storyShortDescription']);
  }

}
