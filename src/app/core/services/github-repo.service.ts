import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APRRepo } from 'src/app/shared/models/repo';
import { environment } from 'src/environments/environment';

@Injectable()
export class APRRepoService {

    private _owner_repo = 'repos/angular/angular';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAngularRepo() {
        return this.httpClient.get<APRRepo>(`${environment.github_api}${this._owner_repo}`);
    }
}