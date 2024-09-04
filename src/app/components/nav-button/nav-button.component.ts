import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DeckService } from '../../services/cards/deck.service';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: 'right' | 'left' | 'default';
  @Output() navigate = new EventEmitter<any>();

  constructor(public route: ActivatedRoute, public deckService: DeckService) { }

  get isDisabled(): boolean {
    return (
      this.type === 'right' && this.deckService.isNextButtonDisabled ||
      this.type === 'left' && this.deckService.isPrevButtonDisabled
    )
  }

  ngOnInit() {}

  onClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (this.isDisabled) return
    this.navigate.emit()
  }
}
