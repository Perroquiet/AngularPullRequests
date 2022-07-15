import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './00-landing-page/landing-page';
import { APRPullRequestsViewComponent } from './01-pull-requests/pull-requests-view';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'view/:id',
        component: APRPullRequestsViewComponent
    }
];

@NgModule({
    declarations: [
        LandingPageComponent,
        APRPullRequestsViewComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        RouterModule.forChild(routes)
    ]
})
export class APRPagesModule { }