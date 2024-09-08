import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../../services/cards/deck.service';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  captchaForm: FormGroup;
  isPermittedLocation = true;

  constructor(
    public deckService: DeckService,
    public translate: TranslateService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.deckService.setCaptchaNotCleared();

    this.isPermittedLocation = await this.deckService.isPermittedLocation();
    this.captchaForm = this.formBuilder.group({
      recaptcha: ['', Validators.required],
    });

  }
  
  async ngAfterContentInit() {
    this.deckService.userCanBack();
    this.deckService.userCannotContinue();
  }

  handleSuccess(event) {
    this.deckService.setCaptchaCleared();
  }

  get showWarning(): boolean {
    return this.isDescriptionAndPhotoEmpty || !this.isPermittedLocation;
  }

  get isDescriptionAndPhotoEmpty(): boolean {
    console.log(this.deckService.isNextButtonDisabled);
    return !(
      this.deckService.getDescription() || this.deckService.getPreview()
    );
  }

  get reportType(): string {
    const reportType = this.deckService.getReportType();
    return `card.submitButton.${reportType}`;
  }

  get canSubmit(): boolean {
    return (
      this.isDescriptionAndPhotoEmpty && this.deckService.isCaptchaCleared()
    );
  }

  closeTerms() {
    $('#termsPopup').hide();
  }

  openTermsAndPoliciesPopup() {
    $('#termsPopup').show();
  }
}
