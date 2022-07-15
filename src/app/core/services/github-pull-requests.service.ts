import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRItem } from 'src/app/shared/models/pr-item';
import { PRListItem } from 'src/app/shared/models/pr-list-item';
import { environment } from 'src/environments/environment';

@Injectable()
export class APRPullService {

    private _owner_repo = 'repos/angular/angular';

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllPRs(page = 1, per_page = 10) {
        return this.httpClient.get<PRListItem[]>(`${environment.github_api}${this._owner_repo}/pulls?per_page=${per_page}&page=${page}&state=all`);
    }

    getPR(number: Number) {
        return this.httpClient.get<PRItem>(`${environment.github_api}${this._owner_repo}/pulls/${number}`);
    }

    getReviewsFromPR(number: Number) {
        return this.httpClient.get<any[]>(`${environment.github_api}${this._owner_repo}/pulls/${number}/reviews`);
    }
}