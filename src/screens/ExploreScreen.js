import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const ExploreScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-purple-600">Keşfet</Text>
            <Text className="text-gray-500 mt-2">Trend içerikler ve videolar.</Text>
        </SafeAreaView>
    );
};

export default ExploreScreen;
