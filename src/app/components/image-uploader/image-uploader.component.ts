import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'
import { MatDialog } from '@angular/material';
import { ImageEditorDialogComponent } from '../image-editor-dialog/image-editor-dialog.component';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  @ViewChild('file') fileInput: ElementRef<HTMLInputElement>;
  rotateDeg: number = 0

  cachedFile = undefined

  constructor(
    private deckService: DeckService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cachedFile = this.deckService.getPreview();

    if (this.cachedFile) {
      this.setImagePreview(this.cachedFile);
    }
  }

  get isImageSelected(): boolean {
    return this.deckService.getPreview() ? true : false
  }

  onFileChanged(event) {
    this.setImagePreview(event.target.files[0])
    this.deckService.setPreview(event.target.files[0] as File)
    this.deckService.updateSignedUrl(event.target.files[0] as File)

  }

  openImageEditDialog($event) {
    $event.preventDefault();
    
    const dialogRef = this.dialog.open(ImageEditorDialogComponent, {
      data: { image: this.cachedFile ? this.cachedFile : this.fileInput.nativeElement.files[0] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  setImagePreview(file) {
    const reader = new FileReader()
    reader.onload = function (e: any) {
      document.getElementById('image-uploader-picture').setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(file)
  }

  deletePreview() {
    this.deckService.setPreview(undefined)
  }

  selectFile() {
    this.fileInput.nativeElement.click();
  }
}
