import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import LoadingFullScreen from './app/components/Animations/LoadingFullScreen'
import { AuthContext } from './app/context'
import RootNavigator from './app/navigation/RootNavigation'
import RootStackScreen from './app/navigation/RootStackScreens'

export default function App() {
    useFonts({
        'BeVietnam-Bold': require('./assets/fonts/BeVietnam-Bold.ttf'),
        'BeVietnam-Regular': require('./assets/fonts/BeVietnam-Regular.ttf'),
        'BeVietnam-ExtraBold': require('./assets/fonts/BeVietnam-ExtraBold.ttf'),
        'BeVietnam-Light': require('./assets/fonts/BeVietnam-Light.ttf'),
        'BeVietnam-Thin': require('./assets/fonts/BeVietnam-Thin.ttf'),
        'BeVietnam-SemiBold': require('./assets/fonts/BeVietnam-SemiBold.ttf'),
        'BeVietnam-Medium': require('./assets/fonts/BeVietnam-Medium.ttf'),
    })

    const initialLoginState = {
        isLoading: true,
        email: null,
        userToken: null,
    }

    const useLoginReducer = (prevState: any, action: any) => {
        switch (action.type) {
            case 'RETRIVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'REQUEST_ON':
                return {
                    ...prevState,
                    isLoading: true,
                }
            case 'REQUEST_OFF':
                return {
                    ...prevState,
                    isLoading: false,
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
            case 'REGISTER':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
        }
    }

    const [useLoginState, setLoginState] = React.useReducer(
        useLoginReducer,
        initialLoginState
    )

    const useAuthContext = React.useMemo(
        () => ({
            SingIn: async (findUser: any) => {
                const userToken = String(findUser.uid)

                await AsyncStorage.setItem('userToken', userToken)

                setLoginState({
                    type: 'LOGIN',
                    id: findUser.email,
                    token: findUser.uid,
                })
            },

            SingOut: async () => {
                await AsyncStorage.removeItem('userToken')

                setLoginState({
                    type: 'LOGOUT',
                })
            },

            requestOn: () => {
                setLoginState({
                    type: 'REQUEST_ON',
                })
            },

            requestOff: () => {
                setLoginState({
                    type: 'REQUEST_OFF',
                })
            },
        }),
        []
    )

    useEffect(async () => {
        const userToken = await AsyncStorage.getItem('userToken')

        setLoginState({
            type: 'RETRIVE_TOKEN',
            token: userToken,
        })
    }, [])

    if (useLoginState.isLoading) {
        return <LoadingFullScreen />
    } else {
        return (
            <AuthContext.Provider value={useAuthContext}>
                <SafeAreaProvider>
                    <StatusBar backgroundColor="#424874" />

                    <NavigationContainer>
                        {useLoginState.userToken != null ? (
                            <RootNavigator />
                        ) : (
                            <RootStackScreen />
                        )}
                    </NavigationContainer>
                </SafeAreaProvider>
            </AuthContext.Provider>
        )
    }
}
