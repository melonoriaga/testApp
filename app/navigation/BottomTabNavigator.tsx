import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import HomeScreen from '../screens/Home/HomeScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import StudentScreen from '../screens/Student/StudentContainerScreen'
import TabThreeScreen from '../screens/TabThreeScreen'
import {
    BottomTabParamList,
    StudentParamList,
    TabThreeParamList,
    SettingsParamList,
    HomeParamList,
} from '../types'

const BottomTab = createMaterialBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            activeColor={Colors.primary.white}
            inactiveColor={Colors.gray.thirty}
            initialRouteName="Student"
        >
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarColor: Colors.primary.dark,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-home" color={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Tevi"
                component={StudentNavigator}
                options={{
                    tabBarColor: Colors.primary.dark,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="md-eye" color={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="TabThree"
                component={TabThreeNavigator}
                options={{
                    tabBarColor: Colors.primary.dark,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-play" color={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="ProfileScreen"
                component={ProfileScreenNavigator}
                options={{
                    tabBarColor: Colors.gray.nineHundred,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-settings" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />
}

const StudentStack = createStackNavigator<StudentParamList>()

function StudentNavigator() {
    return (
        <StudentStack.Navigator>
            <StudentStack.Screen
                name="StudentScreen"
                component={StudentScreen}
                options={{ headerShown: false }}
            />
        </StudentStack.Navigator>
    )
}

const TabTwoStack = createStackNavigator<HomeParamList>()

function HomeNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
        </TabTwoStack.Navigator>
    )
}

const TabThreeStack = createStackNavigator<TabThreeParamList>()

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="TabThreeScreen"
                component={TabThreeScreen}
                options={{
                    headerTitle: 'Aca mi perfil',
                    headerStyle: {
                        backgroundColor: Colors.primary.dark,
                    },
                    headerTintColor: Colors.primary.white,
                    headerTitleAlign: 'center',
                }}
            />
        </TabThreeStack.Navigator>
    )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function ProfileScreenNavigator() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitle: 'Aca settings',
                    headerStyle: {
                        backgroundColor: Colors.gray.nineHundred,
                    },
                    headerTintColor: Colors.primary.white,
                    headerTitleAlign: 'center',
                }}
            />
        </SettingsStack.Navigator>
    )
}
