import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  options = [
    {
      title: 'Open Gutter',
      description: 'Person or bike can fall in',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Wires & Poles',
      description: 'Risk of electric shock',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Khadda - Pit',
      description: 'Cars or trucks can fall in',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Flooded Underpass',
      description: 'Vehicles may get stuck',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Blocked Road',
      description: 'Unable to cross stree ahead',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Nala Overflow',
      description: 'Sewage Water, Health Hazard',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
  ];

  constructor() { }

  ngOnInit() { }

  onSelect($event) {
    this.options = this.options.map(option => {
      if (option.title === $event.title && option.description === $event.description) {
        option.selected = !option.selected;
      }

      return option;
    });
  }

}
