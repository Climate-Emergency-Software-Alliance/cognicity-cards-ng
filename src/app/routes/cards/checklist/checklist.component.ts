import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  options = [
    {
      title: 'Saad Ahmed',
      description: 'My name is Saad Ahmed Siddiqui',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Saad Ahmed',
      description: 'My name is Saad Ahmed Siddiqui',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
    {
      title: 'Saad Ahmed',
      description: 'My name is Saad Ahmed Siddiqui',
      imageUrl: 'assets/decks/flood/img.png',
      selected: false
    },
  ];

  constructor() { }

  ngOnInit() { }

  onSelect($event) {
    this.options.forEach(option => {
      if (option.title === $event.title && option.description === $event.description) {
        option.selected = !option.selected;
      }
    });
  }

}
