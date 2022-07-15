import { PRListItem } from '../models/pr-list-item';

export function getSVGIcon(item: PRListItem) {
    switch (item.state) {
        case 'open':
            return item.draft ? 'pr-open-draft' : 'pr-open';
        case 'closed':
            return item.merged_at != null ? 'pr-merged' : 'pr-closed';
        default:
            return 'pr-open'
    }
}

export function getStatus(item: PRListItem) {
    switch (item.state) {
        case 'open':
            return item.draft ? 'Draft' : 'Open';
        case 'closed':
            return item.merged_at != null ? 'Merged' : 'Closed';
        default:
            return item.state;
    }
}