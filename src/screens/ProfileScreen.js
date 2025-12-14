import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-pink-600">Profil</Text>
            <Text className="text-gray-500 mt-2">Kullanıcı bilgilerin.</Text>
        </SafeAreaView>
    );
};

export default ProfileScreen;
