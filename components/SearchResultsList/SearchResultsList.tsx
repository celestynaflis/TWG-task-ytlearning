import { Video } from '@/api/types';
import { VideosList } from './VideosList';
import { useSearchQuery } from '@/context/SearchQueryContext';
import { View, Text } from 'react-native';
import { searchResultsListStyles } from './SearchResultsListStyles';
import React, { useState } from 'react';
import { SortingOptionModal } from '@/components/SearchResultsList/SortingOptionModal/SortingOptionModal';
import { sortListByPublishedDate } from '@/utils/sortListByPublishedDate';

interface SearchResultsProps {
    data: Video[];
}

export enum SortingOption {
    mostPopular = 'Most popular',
    oldest = 'Upload date: oldest',
    latest = 'Upload date:  latest',
}

export type SortOrder = 'latest' | 'oldest';

export const SearchResultsList: React.FC<SearchResultsProps> = ({ data }) => {
    const { searchQuery } = useSearchQuery();
    const [selectedSortingOption, setSelectedSortingOption] =
        useState<SortingOption>(SortingOption.mostPopular);
    const [isSortingModalOpen, setIsSortingModalOpen] = useState(false);

    const displayData = (data: Video[]) => {
        switch (selectedSortingOption) {
            case SortingOption.latest:
                return sortListByPublishedDate(data, 'latest');
            case SortingOption.oldest:
                return sortListByPublishedDate(data, 'oldest');
            case SortingOption.mostPopular:
                // TODO - implement sorting by most popular
                return data;
            default:
                return data;
        }
    };

    const ListHeader = () => {
        return (
            <>
                <Text style={searchResultsListStyles.resultsCounterText}>
                    {data.length} results found for "
                    <Text style={searchResultsListStyles.queryText}>
                        {searchQuery}
                    </Text>
                    "
                </Text>
                <Text style={searchResultsListStyles.sortText}>
                    Sort by:{' '}
                    <Text
                        onPress={() => {
                            setIsSortingModalOpen(true);
                        }}
                        style={searchResultsListStyles.sortTextButton}
                    >
                        {selectedSortingOption}
                    </Text>
                </Text>
            </>
        );
    };

    return (
        <>
            <SortingOptionModal
                isOpen={isSortingModalOpen}
                onClose={() => {
                    setIsSortingModalOpen(false);
                }}
                setSelectedSortingOption={setSelectedSortingOption}
                selectedSortingOption={selectedSortingOption}
            />
            <View style={searchResultsListStyles.container}>
                <VideosList
                    data={displayData(data)}
                    listHeader={ListHeader()}
                />
            </View>
        </>
    );
};
