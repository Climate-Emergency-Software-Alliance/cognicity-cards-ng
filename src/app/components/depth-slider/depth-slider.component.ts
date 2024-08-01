import { Component, OnInit, NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DeckService } from '../../services/cards/deck.service';

@Component({
  selector: 'app-depth-slider',
  templateUrl: './depth-slider.component.html',
  styleUrls: ['./depth-slider.component.scss'],
})

export class DepthSliderComponent implements OnInit {
  @ViewChild('imageRef') imageElement: ElementRef<HTMLImageElement>;
  @ViewChild('sliderZone') sliderZone: ElementRef<HTMLDivElement>;
  @ViewChild('cardContentWrapper') cardContentWrapper: ElementRef<HTMLDivElement>;

  constructor(private deckService: DeckService) {}

  womanBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-woman.svg';
  manBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-man-selected.svg';

  knobClass: string = '';
  dragContainerOffsetTop: number = 0;
  dragContainerHeight: number = 0;

  sliderIsActive: boolean = false;
  currentY: number = 20;

  //val that may need to pass to parent comp / DB.
  depthText: string = (this.currentY * 2) + ' cm';

  toFeet(cm: number): { feet: string; inches: string } {
    let calculation = (cm * 2) / 33.33;
    let preciseValue = calculation.toFixed(1);
    let feet = preciseValue.split('.')[0];
    let inches = preciseValue.split('.')[1];
    return { feet: `${feet} Ft`, inches: `${inches} In` }
  }
  
  async ngOnInit() {
    this.deckService.userCanBack();
    this.deckService.userCannotContinue();
  }

  setBoundingRects() {
    const cardContentWrapper = this.cardContentWrapper.nativeElement;
    const { top, bottom } = cardContentWrapper.getBoundingClientRect();

    this.dragContainerOffsetTop = top;
    this.dragContainerHeight = ((bottom - top));

    // if (this.deckService.getFloodDepth()) {
    //   this.currentY = this.deckService.getFloodDepth() / 2;
    //   const { inches, feet } = this.toFeet(((this.currentY)));
    //   this.depthText = `${feet} ${inches}`;
    //   this.deckService.userCanContinue();
    // }
    // else {
    //   this.deckService.setFloodDepth(Math.round(this.currentY * 2));
    // }
  }

  setManBackgroundImage() {
    this.imageElement.nativeElement.src = 'assets/decks/flood/depth-bg-man.svg';
    this.manBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-man-selected.svg'
    this.womanBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-woman.svg'
  }

  setWomanBackgroundImage() {
    this.imageElement.nativeElement.src = 'assets/decks/flood/depth-bg-woman.svg';
    this.manBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-man.svg'
    this.womanBackgroundSelectorImage = '/assets/decks/flood/depth-bg-selector-woman-selected.svg'
  }

  dragStart($event) {
    if ($event.target === this.sliderZone.nativeElement) {
       this.sliderIsActive = true;
       this.knobClass = 'active';
     }
  }

  dragEnd($event) {
    this.sliderIsActive = false;
    this.knobClass = '';
    this.deckService.setFloodDepth(Math.round(this.currentY));
    this.deckService.userCanContinue();
  }

  calcPercentInverted(cursorLocation: number, height: number) {
    return 100 - (( cursorLocation / height ) * 100);
  }

  drag($event) {
    let mousePos = $event.touches ? $event.touches[0].clientY : $event.clientY
    const dragPos = this.calcPercentInverted((mousePos - this.dragContainerOffsetTop), this.dragContainerHeight);

    if (this.sliderIsActive) {
      $event.preventDefault();
      // only allow currentY to update if its not bleeding beyond the boundaries of dragContainer
      if(dragPos >= 0 && dragPos <= 100) {
        this.currentY = this.calcPercentInverted((mousePos - this.dragContainerOffsetTop), this.dragContainerHeight);
        const { inches, feet } = this.toFeet(((this.currentY)));
        this.depthText = `${feet} ${inches}`;
      }
    }
  }
}
