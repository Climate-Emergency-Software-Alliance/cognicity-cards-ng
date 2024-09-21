import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ChecklistRoutingModule } from './checklist-routing.module';
import { ChecklistComponent } from './checklist.component';

@NgModule({
  declarations: [
    ChecklistComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ChecklistRoutingModule
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    TranslatePipe
  ]
})
export class ChecklistModule { }
