import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-blue-500 items-center justify-center">
            <Text className="text-white text-2xl font-bold">Uygulama Çalışıyor! 🚀</Text>
            <Text className="text-white mt-2">Düzeltme başarılı.</Text>
        </SafeAreaView>
    );
};

export default HomeScreen;
