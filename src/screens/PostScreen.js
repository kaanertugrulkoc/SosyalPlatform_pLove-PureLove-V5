import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const PostScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Header */}
            <View className="flex-row justify-between items-center px-4 py-2 bg-white border-b border-gray-100 shadow-sm" style={{ zIndex: 10 }}>
                <View className="flex-row items-center">
                    <TouchableOpacity className="mr-4">
                        <Ionicons name="close" size={28} color="black" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-black">Yeni Gönderi</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-600 font-bold text-base">Paylaş</Text>
                </TouchableOpacity>
            </View>

            {/* Current Selection */}
            <View className="w-full bg-gray-50 items-center justify-center relative shadow-inner" style={{ height: width }}>
                <Image
                    source={{ uri: 'https://picsum.photos/800/800' }}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                <View className="absolute bottom-4 left-4 flex-row gap-3">
                    <TouchableOpacity className="bg-black/60 w-9 h-9 rounded-full items-center justify-center">
                        <Ionicons name="expand-outline" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Toolbar */}
            <View className="flex-row justify-between items-center px-4 py-3 bg-white border-b border-gray-100">
                <TouchableOpacity className="flex-row items-center gap-1 active:opacity-60">
                    <Text className="font-bold text-lg text-black">Galeri</Text>
                    <Ionicons name="chevron-down-outline" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-800 rounded-full w-9 h-9 items-center justify-center">
                    <Ionicons name="camera-outline" size={20} color="white" />
                </TouchableOpacity>
            </View>

            {/* Gallery Grid */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-row flex-wrap" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={0.8}
                            className="border-r border-b border-white"
                            style={{ width: width / 3, height: width / 3 }}
                        >
                            <Image
                                source={{ uri: `https://picsum.photos/250/250?random=${i + 60}` }}
                                className="w-full h-full bg-gray-200"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostScreen;
