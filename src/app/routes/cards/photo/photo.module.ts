import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';

// Card route components
import { IconButtonComponent } from '../../../components/icon-button/icon-button.component';
import { ImageUploaderComponent } from '../../../components/image-uploader/image-uploader.component';
import { MatDialogModule } from '@angular/material';
import { ImageEditorDialogComponent } from '../../../components/image-editor-dialog/image-editor-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    ImageCropperModule,
    MatDialogModule,
    CommonModule,
    PhotoRoutingModule
  ],
  declarations: [
    PhotoComponent,
    IconButtonComponent,
    ImageUploaderComponent,
    ImageEditorDialogComponent,
  ],
  entryComponents: [
    ImageEditorDialogComponent
  ]
})
export class PhotoModule { }
