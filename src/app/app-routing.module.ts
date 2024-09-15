import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

import { environment as env } from '../environments/environment';
import { PreloadCardsService } from './services/preload-cards.service';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'thanks', component: ThanksComponent },
  {
    path: ':otl',
    loadChildren: './routes/decks/deck.module#DeckModule',
    data: { decks: env.supportedDecks },
  },
  { path: '**', component: ErrorComponent, data: { error: 'pageNotFound' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      preloadingStrategy: PreloadCardsService,
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadCardsService],
})
export class AppRoutingModule {}
