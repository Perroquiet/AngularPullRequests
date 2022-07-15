import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { APRPullService } from 'src/app/core/services/github-pull-requests.service';
import { getStatus, getSVGIcon } from 'src/app/shared/helpers/status.helper';
import { PRItem } from 'src/app/shared/models/pr-item';

@Component({
    templateUrl: 'pull-requests-view.html',
    styleUrls: ['pull-requests-view.scss']
})
export class APRPullRequestsViewComponent {

    private destroy = new Subject<void>();
    prDetails: PRItem = <PRItem>{};

    getSVGIcon = getSVGIcon;
    getStatus = getStatus;

    constructor(
        private aprService: APRPullService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .pipe(
                takeUntil(this.destroy)
            )
            .subscribe(params => {
                const id = params['id'];
                this.aprService.getPR(id)
                    .pipe(
                        takeUntil(this.destroy)
                    )
                    .subscribe(
                        (result) => {
                            this.prDetails = result;
                        } 
                    );
            });
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
}