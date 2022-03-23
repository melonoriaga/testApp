import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import PreLoginScreen from '../screens/Login/PreLoginScreen'
import SingInScreen from '../screens/Login/SingIn'
import SingUpScreen from '../screens/Login/SingUp'
import { RootStackParamList } from '../types'

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootStackScreen() {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen
                name="PreLoginScreen"
                component={PreLoginScreen}
            />
            <RootStack.Screen name="SingInScreen" component={SingInScreen} />
            <RootStack.Screen name="SingUpScreen" component={SingUpScreen} />
        </RootStack.Navigator>
    )
}
