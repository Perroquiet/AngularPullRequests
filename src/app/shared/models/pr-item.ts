import { APRUser } from "./pr-user";

export interface PRHead {
    label: string;
}

export interface PRBase {
    label: string;
}

export interface PRItem {
    number: Number;
    title: string;
    state: string;
    draft: boolean;
    user: APRUser;
    created_at: string;
    merged_at: string;
    requested_reviewers: APRUser[];
    head: PRHead;
    base: PRBase;
    commits: Number;
}