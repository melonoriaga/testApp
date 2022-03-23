import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import PartnerHistoryScreen from '../screens/History/HistoryScreen'
import RoutineFreeScreen from '../screens/Home/RoutineFree/RoutineFreeScreen'
import RoutineTodayScreen from '../screens/Home/Routines/RoutineTodayScreen'
import FriendDetailScreen from '../screens/Student/FollowDetailScreen'
import PartnerDetailScreen from '../screens/Student/PartnerDetailScreen'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './BottomTabNavigator'

const MainStack = createStackNavigator<RootStackParamList>()
const RootStack = createStackNavigator<RootStackParamList>()

function MainStackScreen() {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Root" component={BottomTabNavigator} />
        </MainStack.Navigator>
    )
}

export default function RootStackScreen() {
    return (
        <RootStack.Navigator
            mode="modal"
            screenOptions={{ headerShown: false }}
        >
            <RootStack.Screen
                name="Root"
                component={MainStackScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="PartnerDetailScreen"
                component={PartnerDetailScreen}
            />
            <RootStack.Screen
                name="FriendDetailScreen"
                component={FriendDetailScreen}
            />
            <RootStack.Screen
                name="RoutineTodayScreen"
                component={RoutineTodayScreen}
            />
            <RootStack.Screen
                name="PartnerHistoryScreen"
                component={PartnerHistoryScreen}
            />
            <RootStack.Screen
                name="RoutineFreeScreen"
                component={RoutineFreeScreen}
            />
        </RootStack.Navigator>
    )
}
