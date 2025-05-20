import { Video } from '@/api/types';
import { SortOrder } from '@/components/SearchResultsList/SearchResultsList';

export const sortListByPublishedDate = (
    list: Video[],
    sortOrder: SortOrder,
) => {
    return list.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });
};
