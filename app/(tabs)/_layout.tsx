import React from 'react';
import { Tabs } from 'expo-router';

import colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import HomeIcon from '@/assets/icons/home-icon.svg';
import SearchIcon from '@/assets/icons/search-icon.svg';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
    const colorScheme = useColorScheme();

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
                    // paddingBottom: 10, // 👈 opcjonalnie, dla lepszego rozmieszczenia
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
