import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploder',
  templateUrl: './file-uploder.component.html',
  styleUrls: ['./file-uploder.component.scss']
})
export class FileUploderComponent implements OnInit {

   afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png',
    maxSize: '1',
    uploadAPI:  {
      url: 'https://example-file-upload-api',
      method: 'POST',
      headers: {
     'Content-Type' : 'text/plain;charset=UTF-8',
     'Authorization' : `Bearer`
      },
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor() { }

  ngOnInit() {
  }

}
