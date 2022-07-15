import { APRUser } from './pr-user';

export interface APRRepo {
    name: string;
    full_name: string;
    owner: APRUser
    html_url: string;
    description: string;
}