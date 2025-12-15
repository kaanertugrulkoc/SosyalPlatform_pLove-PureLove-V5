import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// Mock Data for Stories
const STORIES = [
    { id: 1, user: 'ali_yilmaz', image: 'https://i.pravatar.cc/150?u=a' },
    { id: 2, user: 'ayse.k', image: 'https://i.pravatar.cc/150?u=b' },
    { id: 3, user: 'mert_demir', image: 'https://i.pravatar.cc/150?u=c' },
    { id: 4, user: 'zeynep_88', image: 'https://i.pravatar.cc/150?u=d' },
    { id: 5, user: 'can.berk', image: 'https://i.pravatar.cc/150?u=e' },
];

// Mock Data for Posts
const POSTS = [
    {
        id: 1,
        user: 'ali_yilmaz',
        userImage: 'https://i.pravatar.cc/150?u=a',
        postImage: 'https://picsum.photos/600/600?random=1',
        likes: 124,
        caption: 'Hafta sonu kaçamağı! 🌲 #doğa #kamp',
        time: '2 saat önce',
    },
    {
        id: 2,
        user: 'ayse.k',
        userImage: 'https://i.pravatar.cc/150?u=b',
        postImage: 'https://picsum.photos/600/800?random=2',
        likes: 856,
        caption: 'Yeni ofis manzarası ☕️',
        time: '4 saat önce',
    },
    {
        id: 3,
        user: 'tech_guru',
        userImage: 'https://i.pravatar.cc/150?u=c',
        postImage: 'https://picsum.photos/600/500?random=3',
        likes: 2405,
        caption: 'Kodlamaya devam... 💻 #yazılım #reactnative',
        time: '6 saat önce',
    },
];

const StoryItem = ({ item }) => (
    <View className="items-center mr-4">
        <View className="p-1 rounded-full border-2 border-pink-500">
            <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-full"
            />
        </View>
        <Text className="text-xs mt-1 text-gray-700">{item.user}</Text>
    </View>
);

const PostItem = ({ item }) => (
    <View className="mb-6 bg-white border-t border-gray-100">
        {/* Header */}
        <View className="flex-row items-center justify-between p-3">
            <View className="flex-row items-center">
                <Image
                    source={{ uri: item.userImage }}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <Text className="font-bold text-gray-900">{item.user}</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="black" />
            </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
            source={{ uri: item.postImage }}
            className="w-full h-96 bg-gray-200"
            resizeMode="cover"
        />

        {/* Actions */}
        <View className="flex-row items-center justify-between p-3">
            <View className="flex-row items-center space-x-4 gap-4">
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

        {/* Likes & Caption */}
        <View className="px-3 pb-2">
            <Text className="font-bold text-sm mb-1">{item.likes} beğenme</Text>
            <View className="flex-row flex-wrap">
                <Text className="font-bold mr-2 text-sm">{item.user}</Text>
                <Text className="text-gray-800 text-sm">{item.caption}</Text>
            </View>
            <Text className="text-gray-400 text-xs mt-1">{item.time}</Text>
        </View>
    </View>
);

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Top Bar */}
            <View className="flex-row justify-between items-center px-4 py-2 border-b border-gray-100">
                <Text className="text-2xl font-bold font-serif italic text-black">Evrensel</Text>
                <View className="flex-row gap-4">
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="chatbubble-ellipses-outline" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Stories */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="py-3 px-3 border-b border-gray-100"
                >
                    <View className="items-center mr-4">
                        <View className="relative">
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/150?u=me' }}
                                className="w-16 h-16 rounded-full border border-gray-200"
                            />
                            <View className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 items-center justify-center border-2 border-white">
                                <Ionicons name="add" size={14} color="white" />
                            </View>
                        </View>
                        <Text className="text-xs mt-1 text-gray-500">Hikayen</Text>
                    </View>
                    {STORIES.map((story) => (
                        <StoryItem key={story.id} item={story} />
                    ))}
                </ScrollView>

                {/* Posts */}
                <View className="pb-4">
                    {POSTS.map((post) => (
                        <PostItem key={post.id} item={post} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
