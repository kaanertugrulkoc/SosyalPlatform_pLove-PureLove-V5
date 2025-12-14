import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const ChatScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-indigo-600">Sohbetler</Text>
            <Text className="text-gray-500 mt-2">Mesajların burada listelenir.</Text>
        </SafeAreaView>
    );
};

export default ChatScreen;
