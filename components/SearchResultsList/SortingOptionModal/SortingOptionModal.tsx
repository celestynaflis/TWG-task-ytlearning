import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import React, { SetStateAction, useState } from 'react';
import { Text } from '@/components/Themed';
import { SortingOption } from '@/components/SearchResultsList/SearchResultsList';
import { styles } from './SortingOptionModalStyles';

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
            <View style={styles.backdrop}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Sort records by:</Text>
                    {sortOptions.map((option) => (
                        <Pressable
                            key={option}
                            style={styles.optionRow}
                            onPress={() => setSelectedRadioButton(option)}
                        >
                            <View style={styles.radioOuter}>
                                {selectedRadioButton === option && (
                                    <View style={styles.radioInner} />
                                )}
                            </View>
                            <Text style={styles.optionLabel}>{option}</Text>
                        </Pressable>
                    ))}

                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={handleConfirm}
                    >
                        <Text style={styles.confirmText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
