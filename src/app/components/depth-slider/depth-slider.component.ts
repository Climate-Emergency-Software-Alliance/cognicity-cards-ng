import { Component, OnInit, NgModule } from '@angular/core';
import DepthBgComponent from '../depth-bg/depth-bg.component';

@Component({
  selector: 'app-depth-slider',
  templateUrl: './depth-slider.component.html',
  styleUrls: ['./depth-slider.component.scss'],
})

@NgModule({
  declarations: [
    DepthBgComponent
  ]
})

export class DepthSliderComponent implements OnInit {

  constructor() {}

  knobClass:string = '';
  dragContainerOffsetTop:number = 0;
  dragContainerHeight:number = 0;
  dragContainer; dragItem;
  sliderIsActive:boolean = false;
  currentY:number = 22;

  //val that may need to pass to parent comp / DB.
  depthText:number = this.currentY*2;

  ngOnInit() {
    //get position of the card relative to top
    this.dragContainer = document.querySelector('#cardContentWrapper');
    this.dragItem = document.querySelector('#sliderZone');
    this.dragContainerOffsetTop = this.dragContainer.getBoundingClientRect().top;
    this.dragContainerHeight = this.dragContainer.getBoundingClientRect().bottom - document.querySelector('#cardContentWrapper').getBoundingClientRect().top;
  }

  dragStart($event) {
    if ($event.target === this.dragItem) {
       this.sliderIsActive = true;
       this.knobClass = 'active';
     }
  }

  dragEnd($event) {
    this.sliderIsActive = false;
    this.knobClass = '';
  }

  calcPercentInverted(val, total){
    return 100 - ((val/total)*100);
  }

  drag($event) {
    const dragPos = this.calcPercentInverted($event.clientY - this.dragContainerOffsetTop, this.dragContainerHeight);
    if (this.sliderIsActive) {
      $event.preventDefault();
      //only allow currentY to update if its not bleeding beyond the boundaries of dragContainer
      if(dragPos >= 0 && dragPos <= 100){
        this.currentY = this.calcPercentInverted($event.clientY - this.dragContainerOffsetTop, this.dragContainerHeight);
        this.depthText = Math.round(this.currentY * 2);
      }
    }
  }
}
