import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { APRPullService } from 'src/app/core/services/github-pull-requests.service';
import { APRRepoService } from 'src/app/core/services/github-repo.service';
import { getStatus, getSVGIcon } from 'src/app/shared/helpers/status.helper';
import { PRListItem } from 'src/app/shared/models/pr-list-item';
import { APRRepo } from 'src/app/shared/models/repo';

@Component({
    templateUrl: 'landing-page.html',
    styleUrls: ['landing-page.scss']
})
export class LandingPageComponent {

    private destroy = new Subject<void>();

    repoDetails: APRRepo = <APRRepo>{};
    pullRequestsList: PRListItem[] = [];
    page = 1;
    loading = false;

    getSVGIcon = getSVGIcon;
    getStatus = getStatus;
    

    constructor(
        private aprPullService: APRPullService,
        private aprRepoService: APRRepoService,
        private router: Router
    ) { }

    ngOnInit() {
        this.aprRepoService.getAngularRepo()
            .pipe(
                takeUntil(this.destroy)
            )
            .subscribe(
                result => {
                    this.repoDetails = result;
                }
            )
        this.loadPRs();
    }

    private loadPRs(page = 1) {
        this.loading = true;
        this.aprPullService.getAllPRs(page, 15)
            .pipe(
                takeUntil(this.destroy)
            )
            .subscribe(
                result => {
                    this.pullRequestsList = this.pullRequestsList.concat(result);
                    this.loading = false;
                })
    }


    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        if (pos == max) {
            this.loading = true;
            setTimeout(() => {
                this.page += 1;
                this.loadPRs(this.page);
            }, 1000)
        }
    }

    openPR(item: PRListItem) {
        this.router.navigate(['/view', item.number]);
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}