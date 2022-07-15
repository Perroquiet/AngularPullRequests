import { APRUser } from './pr-user';

export interface PRListItem {
    number: Number;
    title: string;
    state: string;
    draft: boolean;
    merged_at: string;
    user: APRUser;
}