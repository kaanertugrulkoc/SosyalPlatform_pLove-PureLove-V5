import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const PostScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-green-600">Paylaş</Text>
            <Text className="text-gray-500 mt-2">Yeni bir anı paylaş.</Text>
        </SafeAreaView>
    );
};

export default PostScreen;
