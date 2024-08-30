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

  isManBg = true;

  constructor(private deckService: DeckService) {}

  images = {
    man: {
      sliderBackgroundImage: 'assets/decks/flood/depth-bg-man.svg',
      selectorImage: '/assets/decks/flood/depth-bg-selector-man.svg',
      selectorImageSelected: '/assets/decks/flood/depth-bg-selector-man-selected.svg'
    },
    woman: {
      sliderBackgroundImage: 'assets/decks/flood/depth-bg-woman.svg',
      selectorImage: '/assets/decks/flood/depth-bg-selector-woman.svg',
      selectorImageSelected: '/assets/decks/flood/depth-bg-selector-woman-selected.svg'
    }
  }

  womanBackgroundSelectorImage = this.images.woman.selectorImage;
  manBackgroundSelectorImage = this.images.man.selectorImageSelected;

  knobClass: string = '';
  dragContainerOffsetTop: number = 0;
  dragContainerHeight: number = 0;

  sliderIsActive: boolean = false;
  currentY: number = 20;

  //val that may need to pass to parent comp / DB.
  depthText: string = ' ';

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


    if (this.deckService.getFloodDepth()) {
      this.currentY = this.deckService.getFloodDepth();
      const { inches, feet } = this.toFeet(((this.currentY)));
      this.depthText = `${feet} ${inches}`;
      this.deckService.userCanContinue();
    } else {
      const halfHeight = (bottom - top) / 2;
      this.currentY = this.calcPercentInverted(halfHeight, this.dragContainerHeight);
      const { inches, feet } = this.toFeet(((this.currentY)));
      this.depthText = `${feet} ${inches}`;
    }
  }

  setManBackgroundImage() {
    this.imageElement.nativeElement.src = this.images.man.sliderBackgroundImage;
    this.manBackgroundSelectorImage = this.images.man.selectorImageSelected;
    this.womanBackgroundSelectorImage = this.images.woman.selectorImage;
    this.isManBg = true;
  }

  setWomanBackgroundImage() {
    this.imageElement.nativeElement.src = this.images.woman.sliderBackgroundImage;
    this.manBackgroundSelectorImage = this.images.man.selectorImage;
    this.womanBackgroundSelectorImage = this.images.woman.selectorImageSelected;
    this.isManBg = false;
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
