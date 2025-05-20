import React, { createContext, useState, useContext } from 'react';

interface SearchQueryContextProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchQueryContext = createContext<SearchQueryContextProps | undefined>(
    undefined,
);

export const SearchQueryProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [query, setQuery] = useState('');

    return (
        <SearchQueryContext.Provider value={{ query, setQuery }}>
            {children}
        </SearchQueryContext.Provider>
    );
};

export const useSearchQuery = () => {
    const context = useContext(SearchQueryContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
