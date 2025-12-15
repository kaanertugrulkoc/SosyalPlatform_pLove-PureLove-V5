import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 2; // 3 columns with gap

const ProfileScreen = () => {
    // Mock User Photos
    const PHOTOS = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        uri: `https://picsum.photos/400/400?random=${i + 10}`,
    }));

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Top Bar */}
            <View className="flex-row justify-between items-center px-4 py-2 border-b border-gray-100">
                <View className="flex-row items-center gap-1">
                    <Ionicons name="lock-closed-outline" size={16} color="black" />
                    <Text className="text-lg font-bold">kullanici_adi</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
                </View>
                <View className="flex-row gap-4">
                    <TouchableOpacity>
                        <Ionicons name="add-circle-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="menu-outline" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Stats */}
                <View className="flex-row items-center px-4 py-4">
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?u=me' }}
                        className="w-20 h-20 rounded-full border border-gray-200"
                    />
                    <View className="flex-1 flex-row justify-around ml-4">
                        <View className="items-center">
                            <Text className="font-bold text-lg">12</Text>
                            <Text className="text-gray-900 text-sm">Gönderi</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-lg">1.2B</Text>
                            <Text className="text-gray-900 text-sm">Takipçi</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-lg">450</Text>
                            <Text className="text-gray-900 text-sm">Takip</Text>
                        </View>
                    </View>
                </View>

                {/* Bio */}
                <View className="px-4 pb-4">
                    <Text className="font-bold text-sm">Ad Soyad</Text>
                    <Text className="text-sm text-gray-800">Dijital İçerik Üreticisi 🎨</Text>
                    <Text className="text-sm text-gray-800">Spor, Doğa ve Teknoloji 🏃‍♂️🌲💻</Text>
                    <Text className="text-sm text-blue-800">www.website.com</Text>
                </View>

                {/* Action Buttons */}
                <View className="flex-row px-4 gap-2 mb-4">
                    <TouchableOpacity className="flex-1 bg-gray-200 py-2 rounded-md items-center">
                        <Text className="font-bold text-sm">Profili Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-gray-200 py-2 rounded-md items-center">
                        <Text className="font-bold text-sm">Profili Paylaş</Text>
                    </TouchableOpacity>
                </View>

                {/* Highlights (Future feature placeholder) */}

                {/* Tabs (Grid vs Tagged) */}
                <View className="flex-row border-t border-gray-200">
                    <TouchableOpacity className="flex-1 items-center py-3 border-b-2 border-black">
                        <Ionicons name="grid-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center py-3">
                        <Ionicons name="person-outline" size={24} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* Photo Grid */}
                <View className="flex-row flex-wrap gap-[1px]">
                    {PHOTOS.map((photo) => (
                        <TouchableOpacity key={photo.id}>
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                                className="bg-gray-200"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
