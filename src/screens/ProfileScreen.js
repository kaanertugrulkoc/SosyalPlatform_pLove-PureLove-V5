import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 2; // 3 columns with gap

const ProfileScreen = () => {
    const { logout, user } = useAuth();

    // Mock User Photos
    const PHOTOS = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        uri: `https://picsum.photos/400/400?random=${i + 20}`,
    }));

    const handleLogout = () => {
        Alert.alert(
            'Çıkış Yap',
            'Hesabınızdan çıkış yapmak istediğinize emin misiniz?',
            [
                { text: 'İptal', style: 'cancel' },
                {
                    text: 'Çıkış Yap',
                    style: 'destructive',
                    onPress: async () => {
                        const result = await logout();
                        if (result.success) {
                            // AuthContext otomatik olarak login ekranına yönlendirecek
                        }
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Top Bar */}
            <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-50 bg-white" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View className="flex-row items-center flex-1 pr-4" style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Ionicons name="lock-closed-outline" size={16} color="black" />
                    <Text className="text-xl font-bold ml-1 text-black" numberOfLines={1} style={{ fontWeight: '700' }}>oguzkaankoc_uzun_isim_testi</Text>
                    <Ionicons name="chevron-down" size={14} color="black" className="ml-1" />
                </View>
                <View className="flex-row gap-5" style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity>
                        <Ionicons name="add-circle-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout}>
                        <Ionicons name="log-out-outline" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Profile Stats */}
                <View className="flex-row items-center px-4 py-4" style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg' }}
                        className="w-20 h-20 rounded-full border border-gray-200"
                    />
                    <View className="flex-1 flex-row justify-around ml-4" style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View className="items-center">
                            <Text className="font-bold text-xl text-black">12</Text>
                            <Text className="text-gray-900 text-sm font-semibold">Gönderi</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-xl text-black">1.2B</Text>
                            <Text className="text-gray-900 text-sm font-semibold">Takipçi</Text>
                        </View>
                        <View className="items-center">
                            <Text className="font-bold text-xl text-black">450</Text>
                            <Text className="text-gray-900 text-sm font-semibold">Takip</Text>
                        </View>
                    </View>
                </View>

                {/* Bio */}
                <View className="px-4 pb-4">
                    <Text className="font-bold text-sm text-gray-900">Oğuz Kaan</Text>
                    <Text className="text-sm text-gray-700 leading-5 mt-1">
                        Dijital İçerik Üreticisi 🎨{'\n'}
                        Spor, Doğa ve Teknoloji 🏃‍♂️🌲💻{'\n'}
                        Anı yaşamayı sever.
                    </Text>
                    <Text className="text-sm text-blue-800 font-medium mt-1">www.oguzkaan.com</Text>
                </View>

                {/* Action Buttons */}
                <View className="flex-row px-4 gap-2 mb-6" style={{ flexDirection: 'row', gap: 8 }}>
                    <TouchableOpacity className="flex-1 bg-gray-100 py-2 rounded-lg items-center active:bg-gray-200">
                        <Text className="font-semibold text-sm text-black">Profili Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-gray-100 py-2 rounded-lg items-center active:bg-gray-200">
                        <Text className="font-semibold text-sm text-black">Profili Paylaş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-100 p-2 rounded-lg items-center justify-center active:bg-gray-200">
                        <Ionicons name="person-add-outline" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Highlights Placeholder */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 mb-4">
                    {['Anılar', 'Gezi', 'Kod'].map((item, index) => (
                        <View key={index} className="mr-4 items-center">
                            <View className="w-16 h-16 rounded-full bg-gray-100 border border-gray-300 items-center justify-center mb-1">
                                <Ionicons name="heart-outline" size={24} color="gray" />
                            </View>
                            <Text className="text-xs text-gray-800">{item}</Text>
                        </View>
                    ))}
                </ScrollView>


                {/* Tabs (Grid vs Tagged) */}
                <View className="flex-row border-t border-gray-200" style={{ flexDirection: 'row', borderTopWidth: 1, borderColor: '#e5e7eb' }}>
                    <TouchableOpacity className="flex-1 items-center py-3 border-b-2 border-black">
                        <Ionicons name="grid-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center py-3">
                        <Ionicons name="person-outline" size={24} color="gray" />
                    </TouchableOpacity>
                </View>

                {/* Photo Grid */}
                <View className="flex-row flex-wrap gap-[1px]" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    {PHOTOS.map((photo) => (
                        <TouchableOpacity key={photo.id} activeOpacity={0.8}>
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
