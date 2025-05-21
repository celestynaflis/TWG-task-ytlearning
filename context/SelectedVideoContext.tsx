import React, { createContext, useState, useContext } from 'react';

interface SelectedVideoContextProps {
    selectedVideoId: string;
    setSelectedVideoId: (query: string) => void;
}

const SelectedVideoContext = createContext<
    SelectedVideoContextProps | undefined
>(undefined);

export const SelectedVideoProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [selectedVideoId, setSelectedVideoId] = useState('');

    return (
        <SelectedVideoContext.Provider
            value={{ selectedVideoId, setSelectedVideoId }}
        >
            {children}
        </SelectedVideoContext.Provider>
    );
};

export const useSelectedVideo = () => {
    const context = useContext(SelectedVideoContext);
    if (!context) {
        throw new Error(
            'useSelectedVideo must be used within a SelectedVideoProvider',
        );
    }
    return context;
};
