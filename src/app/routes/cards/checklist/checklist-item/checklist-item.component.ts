import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss'],
})
export class ChecklistItemComponent implements OnInit {
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('imageUrl') imageUrl: string;
  @Input('selected') selected: boolean;
  @Input('index') index: number;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSelectItem($event: MouseEvent) {
    if ($event.type === 'click') {
      return this.onClick.emit({
        title: this.title,
        description: this.description
      });
    }
  }
}
