import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import PostScreen from '../screens/PostScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Ana Akış') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Keşfet') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Paylaş') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                        size = 32; // Make the add button slightly bigger
                    } else if (route.name === 'Sohbet') {
                        iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                    } else if (route.name === 'Profil') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2563EB', // Blue-600
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Ana Akış" component={HomeScreen} />
            <Tab.Screen name="Keşfet" component={ExploreScreen} />
            <Tab.Screen name="Paylaş" component={PostScreen} />
            <Tab.Screen name="Sohbet" component={ChatScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
