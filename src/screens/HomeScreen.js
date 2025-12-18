import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Mock Data
const STORIES = [
    { id: 0, user: 'hikaye_senin', avatar: 'https://i.pravatar.cc/150?u=0', isMe: true },
    { id: 1, user: 'alp', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, user: 'selahattin', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, user: 'ertugrul', avatar: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, user: 'oguz', avatar: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, user: 'kaan', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const POSTS = [
    {
        id: 1,
        user: 'dogasever',
        avatar: 'https://i.pravatar.cc/150?u=10',
        image: 'https://picsum.photos/600/600?random=1',
        likes: 124,
        caption: 'Hafta sonu kaçamağı 🌲🏔️ #doga #huzur',
        time: '2 saat önce',
    },
    {
        id: 2,
        user: 'teknoloji_dunyasi',
        avatar: 'https://i.pravatar.cc/150?u=11',
        image: 'https://picsum.photos/600/400?random=2',
        likes: 856,
        caption: 'Yeni setup hazır! 💻 Nasıl buldunuz?',
        time: '5 saat önce',
    },
    {
        id: 3,
        user: 'sanat_galeri',
        avatar: 'https://i.pravatar.cc/150?u=12',
        image: 'https://picsum.photos/600/700?random=3',
        likes: 2300,
        caption: 'Soyut çalışmalar... 🎨',
        time: '1 gün önce',
    },
];

const StoryItem = ({ item }) => (
    <View className="items-center mr-4">
        <View className={`p-[3px] rounded-full ${item.isMe ? '' : 'bg-blue-500'}`}>
            <Image
                source={{ uri: item.avatar }}
                className="w-16 h-16 rounded-full border-2 border-white"
            />
            {item.isMe && (
                <View className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 items-center justify-center border border-white">
                    <Ionicons name="add" size={14} color="white" />
                </View>
            )}
        </View>
        <Text className="text-xs text-center mt-1 text-gray-800">
            {item.isMe ? 'Hikayen' : item.user.length > 10 ? item.user.slice(0, 10) + '...' : item.user}
        </Text>
    </View>
);

const PostItem = ({ item }) => (
    <View className="mb-6 bg-white shadow-sm border-b border-gray-100 pb-4">
        {/* Post Header */}
        <View className="flex-row items-center justify-between px-3 py-2">
            <View className="flex-row items-center cursor-pointer">
                <Image
                    source={{ uri: item.avatar }}
                    className="w-8 h-8 rounded-full border border-gray-200"
                />
                <Text className="ml-2 font-bold text-gray-900">{item.user}</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
            </TouchableOpacity>
        </View>

        {/* Post Image */}
        <Image
            source={{ uri: item.image }}
            style={{ width: width, height: width }} // Square or dynamic aspect ratio
            className="bg-gray-100"
        />

        {/* Post Actions */}
        <View className="flex-row items-center justify-between px-3 pt-3" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View className="flex-row items-center gap-4" style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="paper-plane-outline" size={26} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={26} color="black" />
            </TouchableOpacity>
        </View>

        {/* Post Footer */}
        <View className="px-3 mt-2">
            <Text className="font-bold text-black">{item.likes} beğenme</Text>
            <View className="flex-row mt-1">
                <Text className="font-bold mr-2">{item.user}</Text>
                <Text className="text-gray-900 flex-1">{item.caption}</Text>
            </View>
            <Text className="text-gray-500 text-xs mt-1">{item.time}</Text>
        </View>
    </View>
);

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            {/* Custom Header */}
            <View className="flex-row justify-between items-center px-4 py-2 bg-white">
                <Text className="text-2xl font-bold italic text-black font-['System']">SosyalPlatform</Text>
                <View className="flex-row gap-5">
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="relative">
                        <Ionicons name="chatbubble-ellipses-outline" size={26} color="black" />
                        <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                            <Text className="text-[10px] text-white font-bold">2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={POSTS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PostItem item={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View className="py-2 border-b border-gray-100">
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                        >
                            {STORIES.map((story) => (
                                <StoryItem key={story.id} item={story} />
                            ))}
                        </ScrollView>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
