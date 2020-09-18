import { Component, OnInit, Input } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from 'node_modules/@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.scss']
})
export class CkEditorComponent implements OnInit {

  @Input() onChange: ({editor}: ChangeEvent) => void;
  public Editor = ClassicEditor;
  public content: string;
  constructor() { }

  ngOnInit() {
  }

  onChangeInject(event: ChangeEvent) {
    this.onChange(event);
  }

}
