import React from 'react';
import { Tabs } from 'expo-router';
import colors from '@/constants/Colors';
import HomeIcon from '@/assets/icons/home-icon.svg';
import SearchIcon from '@/assets/icons/search-icon.svg';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.navyBlue,
                tabBarInactiveTintColor: colors.white,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.backgroundBlue,
                    borderTopWidth: 0,
                    height: 100,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    fontFamily: 'PoppinsRegular',
                    fontSize: 16,
                    marginTop: 5,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon
                            width={32}
                            height={32}
                            fill={focused ? colors.navyBlue : colors.white}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            width={32}
                            height={32}
                            stroke={focused ? colors.navyBlue : colors.white}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
