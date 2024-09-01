import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../services/navigation.service';
import { DeckService } from '../../../services/cards/deck.service';
import { environment as env } from '../../../../environments/environment';

interface ReportingMode {
  title: string;
  subType: 'real' | 'training';
  className: string;
}

@Component({
  selector: 'app-flood',
  templateUrl: './flood.component.html',
  styleUrls: ['./flood.component.scss'],
})
export class FloodComponent implements OnInit {
  items: ReportingMode[];
  showReportTypeButton: boolean = true;
  nextIsSubmit = false;
  isSubmitting = false;

  constructor(
    public translate: TranslateService,
    public route: ActivatedRoute,
    public navController: NavigationService,
    public deckService: DeckService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(env.default_language);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.deckService.getCardLanguage());

    // Store card routes for navigation
    this.navController.registerCardRoutes('flood');

    // Check for first card, else redirect
    this.navController.checkForFirstCard(this.route);

    this.deckService.setDeckType('flood');
    this.deckService.setDeckSubType('flood');
    this.deckService.setRoute(route);
  }

  onTypeSelected(type) {
    this.showReportTypeButton = false;
    this.deckService.selectReportType(type);
  }

  get isShowButtons(): boolean {
    return this.showReportTypeButton;
  }

  ngOnInit() {
    this.items = [
      {
        title: 'card.type.report.realTypeButton',
        subType: 'real',
        className: 'reportType_button-main',
      },
      {
        title: 'card.type.report.trainingTypeButton',
        subType: 'training',
        className: 'reportType_button',
      },
    ];
  }

  nextPage(route: ActivatedRoute) {
    this.navController.next(route);
    if (this.navController.getCurrentRouteName() === 'review') {
      this.nextIsSubmit = true;
    }
  }

  previousPage(route: ActivatedRoute) {
    this.navController.back(route);
  }

  submitReport() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    this.deckService
      .submit()
      .then((resolved) => {
        this.isSubmitting = false;
        console.log(resolved);
        this.navController.next(this.route);
      })
      .catch((err) => {
        this.isSubmitting = false;
        console.log(err);
      });
  }
}
