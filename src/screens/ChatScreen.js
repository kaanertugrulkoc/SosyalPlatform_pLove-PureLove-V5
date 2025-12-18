import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CHATS = [
    { id: 1, name: 'selahattin', message: 'Yarın buluşuyor muyuz?', time: '14:30', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'alp', message: 'Fotoğrafları attım 📸', time: '12:15', avatar: 'https://i.pravatar.cc/150?u=4', unread: 2 },
    { id: 3, name: 'kaan', message: 'Tebrikler kardeşim!', time: 'Dün', avatar: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'oguz', message: 'Görüşürüz 👋', time: 'Dün', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 5, name: 'Teknoloji Grubu', message: 'Can: Yeni sürüm çıktı mı?', time: 'Salı', avatar: 'https://i.pravatar.cc/150?u=11' },
    { id: 6, name: '...', message: 'Teşekkürler', time: 'Pzt', avatar: 'https://i.pravatar.cc/150?u=5' },
    { id: 7, name: '...', message: 'Maçı izledin mi?', time: 'Pzt', avatar: 'https://i.pravatar.cc/150?u=6' },
];

const ChatItem = ({ item }) => (
    <TouchableOpacity className="flex-row items-center px-4 py-3 bg-white active:bg-gray-50">
        <Image
            source={{ uri: item.avatar }}
            className="w-14 h-14 rounded-full bg-gray-200"
        />
        <View className="flex-1 ml-3 justify-center">
            <View className="flex-row justify-between items-center">
                <Text className="font-bold text-base text-gray-900">{item.name}</Text>
                <Text className="text-gray-500 text-xs">{item.time}</Text>
            </View>
            <View className="flex-row justify-between items-center mt-0.5">
                <Text numberOfLines={1} className={`text-sm flex-1 mr-4 ${item.unread ? 'font-bold text-black' : 'text-gray-500'}`}>
                    {item.message}
                </Text>
                {item.unread && (
                    <View className="bg-blue-500 w-5 h-5 rounded-full items-center justify-center">
                        <Text className="text-white text-xs font-bold">{item.unread}</Text>
                    </View>
                )}
            </View>
        </View>
    </TouchableOpacity>
);

const ChatScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Header */}
            <View className="px-4 py-3 flex-row justify-between items-center border-b border-gray-100">
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xl font-bold ml-1">kullanici_adi</Text>
                    <Ionicons name="chevron-down" size={16} color="black" className="ml-1" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="create-outline" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Search (Optional here too) */}
            <View className="px-4 py-2">
                <View className="flex-row items-center bg-gray-100 rounded-xl px-3 py-2">
                    <Ionicons name="search" size={20} color="gray" />
                    <TextInput
                        placeholder="Ara"
                        className="flex-1 ml-2 text-base text-black"
                        placeholderTextColor="gray"
                    />
                </View>
            </View>

            <View className="flex-row px-4 py-2 items-center justify-between">
                <Text className="font-bold text-lg">Mesajlar</Text>
                <Text className="text-blue-500 font-semibold">İstekler</Text>
            </View>

            <FlatList
                data={CHATS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ChatItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default ChatScreen;
