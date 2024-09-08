import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { SubmitSwipeComponent } from '../../../components/submit-swipe/submit-swipe.component';
import { SubmitButtonComponent } from '../../../components/submit-button/submit-button.component';
import { ReportReviewComponent } from '../../../components/report-review/report-review.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TermsAndPoliciesPopupComponent } from './terms-and-policies-popup/terms-and-policies.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
  ],
  declarations: [
    ReviewComponent,
    TermsAndPoliciesPopupComponent,
    SubmitSwipeComponent,
    SubmitButtonComponent,
    ReportReviewComponent,
  ],
  exports: [TranslateModule],
  providers: [TranslatePipe],
})
export class ReviewModule {}
