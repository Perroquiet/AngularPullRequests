import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/00-landing-page/landing-page';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./pages/pages.module').then(
        (m) => m.APRPagesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class APRRoutingModule { }
