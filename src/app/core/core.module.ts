import { NgModule } from '@angular/core';
import { MaterialModules } from '../material.module';
import { APRPullService } from './services/github-pull-requests.service';
import { APRRepoService } from './services/github-repo.service';

@NgModule({
    providers: [
        APRPullService,
        APRRepoService
    ],
    exports: [
        MaterialModules
    ]
})
export class APRCoreModule {

}