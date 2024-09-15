import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Routes,
  Router,
  RouterModule,
  // RouterStateSnapshot
} from '@angular/router';

import { environment as env } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { DeckComponent } from './deck.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): Promise<boolean> {
    const otl = next.params.otl;

    if (await this.authService.checkOTL(env['stage'], otl)) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
}

const routes: Routes = [
  { 
    path: '',
    component: DeckComponent,
    children: env.supportedDecks,
    canActivate: [AuthGuard]
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    pathMatch: 'full'
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckRoutingModule { }
