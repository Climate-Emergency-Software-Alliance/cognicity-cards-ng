import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { SubmitSwipeComponent } from '../../../components/submit-swipe/submit-swipe.component';
import { ReportReviewComponent } from '../../../components/report-review/report-review.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    SharedModule
  ],
  declarations: [ReviewComponent, SubmitSwipeComponent, ReportReviewComponent],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class ReviewModule { }
