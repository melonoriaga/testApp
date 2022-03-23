import React from 'react'

import LoginSplashComponent from '../../components/Login/PreLoginComponent'

export default function PreLoginScreen({ navigation }: any) {
    return (
        <LoginSplashComponent
            handleNavigateSignInScreen={() => {
                navigation.navigate('SingInScreen')
            }}
            handleNavigateSignUpScreen={() => {
                navigation.navigate('SingUpScreen')
            }}
        />
    )
}
