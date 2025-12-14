import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-blue-600">Ana Akış</Text>
            <Text className="text-gray-500 mt-2">Arkadaşlarının paylaşımları burada.</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;
