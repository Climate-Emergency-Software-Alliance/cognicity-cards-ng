import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-type-button',
  templateUrl: './report-type-button.component.html',
  styleUrls: ['./report-type-button.component.scss'],
})
export class ReportTypeButtonComponent {
  @Input() className: string;

  @Input() title: string;
}
