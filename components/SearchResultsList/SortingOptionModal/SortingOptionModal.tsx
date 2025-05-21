import { Modal, Pressable, TouchableOpacity, View, Text } from 'react-native';
import React, { SetStateAction, useState } from 'react';
import { SortingOption } from '@/components/SearchResultsList/SearchResultsList';
import { modalStyles } from './SortingOptionModalStyles';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selectedSortingOption: SortingOption;
    setSelectedSortingOption: React.Dispatch<SetStateAction<SortingOption>>;
}

export const SortingOptionModal: React.FC<Props> = ({
    isOpen,
    onClose,
    selectedSortingOption,
    setSelectedSortingOption,
}) => {
    const [selectedRadioButton, setSelectedRadioButton] =
        useState<SortingOption>(selectedSortingOption);

    const handleConfirm = () => {
        setSelectedSortingOption(selectedRadioButton);
        onClose();
    };

    const sortOptions = [
        SortingOption.latest,
        SortingOption.oldest,
        SortingOption.mostPopular,
    ];

    return (
        <Modal visible={isOpen} transparent animationType="fade">
            <View style={modalStyles.backdrop}>
                <View style={modalStyles.modalContainer}>
                    <Text style={modalStyles.titleText}>Sort records by:</Text>
                    {sortOptions.map((option) => (
                        <Pressable
                            key={option}
                            style={modalStyles.optionRow}
                            onPress={() => setSelectedRadioButton(option)}
                        >
                            <View style={modalStyles.radioOuter}>
                                {selectedRadioButton === option && (
                                    <View style={modalStyles.radioInner} />
                                )}
                            </View>
                            <Text style={modalStyles.optionLabel}>
                                {option}
                            </Text>
                        </Pressable>
                    ))}

                    <TouchableOpacity
                        style={modalStyles.confirmButton}
                        onPress={handleConfirm}
                    >
                        <Text style={modalStyles.confirmText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
