import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width / 2) - 6; // 2 columns with gap

const ExploreScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Search Bar */}
            <View className="px-4 py-3 pb-2">
                <View className="flex-row items-center bg-gray-100 rounded-xl px-3 py-2">
                    <Ionicons name="search" size={20} color="gray" />
                    <TextInput
                        placeholder="Ara"
                        className="flex-1 ml-2 text-base text-black"
                        placeholderTextColor="gray"
                    />
                </View>
            </View>

            {/* Tags */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2 px-4 mb-2" style={{ maxHeight: 50 }}>
                {['Seyahat', 'Mimari', 'Yemek', 'Sanat', 'Doğa', 'Teknoloji'].map((tag, i) => (
                    <TouchableOpacity key={i} className="mr-3 px-4 py-1.5 border border-gray-300 rounded-lg bg-white">
                        <Text className="font-semibold text-sm">{tag}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Grid Content with Info */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 20 }}>
                <View className="flex-row flex-wrap justify-between">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <TouchableOpacity
                            key={i}
                            activeOpacity={0.9}
                            style={{ width: ITEM_WIDTH, marginBottom: 12 }}
                            className="bg-white rounded-lg shadow-sm border border-gray-100"
                        >
                            <Image
                                source={{ uri: `https://picsum.photos/400/500?random=${i + 100}` }}
                                style={{ width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                                className="bg-gray-200"
                            />
                            {i % 4 === 0 && (
                                <View className="absolute top-2 right-2 bg-black/50 px-1.5 py-0.5 rounded">
                                    <Ionicons name="layers" size={12} color="white" />
                                </View>
                            )}
                            <View className="p-2 space-y-1">
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center">
                                        <Image source={{ uri: `https://i.pravatar.cc/150?u=${i}` }} className="w-5 h-5 rounded-full mr-1.5" />
                                        <Text className="text-xs font-bold text-gray-900 truncate" numberOfLines={1}>user_{i}</Text>
                                    </View>
                                    <Ionicons name="heart-outline" size={14} color="gray" />
                                </View>
                                <Text className="text-xs text-gray-600 line-clamp-2" numberOfLines={2}>
                                    Harika bir manzara keşfettim! 🌲📸
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExploreScreen;
