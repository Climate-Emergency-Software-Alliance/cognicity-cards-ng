import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckRoutingModule, AuthGuard } from './deck-routing.module';
import { DeckComponent } from './deck.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [CommonModule, DeckRoutingModule],
  declarations: [DeckComponent, PrivacyPolicyComponent],
  providers: [AuthGuard],
})
export class DeckModule {}
