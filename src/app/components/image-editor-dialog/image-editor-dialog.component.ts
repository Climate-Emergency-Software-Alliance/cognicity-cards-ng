import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-editor-dialog',
  templateUrl: './image-editor-dialog.component.html',
  styleUrls: ['./image-editor-dialog.component.scss']
})
export class ImageEditorDialogComponent {
    selectedImage: string | null = null;
    croppedImage = null;

  constructor(
    public dialogRef: MatDialogRef<ImageEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { image: File }
  ) {
    
    const reader = new FileReader()
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
    }

    reader.readAsDataURL(data.image)
  }

  imageLoaded() {}

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  save(): void {
    this.dialogRef.close();
  }
  
  // imageCropped(event: ImageCroppedEvent) {
  //   // this.deckService.setPreview
  //   this.croppedImage = event.base64;
  // }

  delete() {
    this.dialogRef.close();
  }

}
