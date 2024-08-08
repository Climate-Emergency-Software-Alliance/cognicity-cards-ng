import { Component, Input } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service'

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent {
  @Input() placeholder:string;
  MAX_LENGTH = 140

  constructor(
    private deckService: DeckService
  ) {}

  onChangeDescription(desc: string) {
    if (desc.length <= 140) {
      this.deckService.setDescription(desc)
    }
  }

  onDisableButtonClick() {
    this.deckService.setDescription('')
  }

  get description(): string {
    return this.deckService.getDescription()
  }
}
