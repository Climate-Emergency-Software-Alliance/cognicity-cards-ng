import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss'],
})
export class ChecklistItemComponent implements OnInit {
  @ViewChild('imageContainerDiv') imageContainerDiv: HTMLDivElement;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('imageUrl') imageUrl: string;
  @Input('selected') selected: boolean;
  @Input('index') index: number;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelectItem($event: MouseEvent) {
    console.log($event.type)

    if ($event.type === 'click') {
      return this.onClick.emit({
        title: this.title,
        description: this.description
      });
    }

    if ($event.type === 'touchend' && this.selected) {
      console.log('touchend');
    }
  }
}
