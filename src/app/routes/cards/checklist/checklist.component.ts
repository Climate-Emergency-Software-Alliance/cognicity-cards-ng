import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  isTwoColumn = false;
  isThreeColumn = false;

  options = [
    {
      title: 'Open Gutter',
      description: 'Person or bike can fall in',
      imageUrl: 'assets/decks/flood/checklist/open_gutter.png',
      selected: false
    },
    {
      title: 'Wires & Poles',
      description: 'Risk of electric shock',
      imageUrl: 'assets/decks/flood/checklist/wires_poles.png',
      selected: false
    },
    {
      title: 'Khadda - Pit',
      description: 'Cars or trucks can fall in',
      imageUrl: 'assets/decks/flood/checklist/broken_road.png',
      selected: false
    },
    {
      title: 'Flooded Underpass',
      description: 'Vehicles may get stuck',
      imageUrl: 'assets/decks/flood/checklist/flooded_u.png',
      selected: false
    },
    {
      title: 'Blocked Road',
      description: 'No way to cross street ahead',
      imageUrl: 'assets/decks/flood/checklist/blocked_road.png',
      selected: false
    },
    {
      title: 'Nala Overflow',
      description: 'Sewage water. Health hazard',
      imageUrl: 'assets/decks/flood/checklist/nala.png',
      selected: false
    },
  ];

  constructor(
    private decksService: DeckService
  ) { }

  ngOnInit() { 
    const checklistedItems = this.decksService.getFloodChecklistItems();

    this.options.map((i) => {
      if (checklistedItems.includes(i.title)) {
        i.selected = true;
      }
    })

    this.isTwoColumn = window.screen.width < 600;
    this.isThreeColumn = window.screen.height >= 600;
  }

  onSelect($event) {
    this.options = this.options.map(option => {
      if (option.title === $event.title && option.description === $event.description) {
        option.selected = !option.selected;

        option.selected ? 
          this.decksService.setFloodChecklistItem(option.title) : 
          this.decksService.removeFloodChecklistItem(option.title)
      }

      return option;
    });
  }

}
