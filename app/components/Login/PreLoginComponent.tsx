import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    StatusBar,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import ButtonWhite from '../../components/Atoms/Buttons/ButtonWhite'
import Colors from '../../constants/Colors'
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimaryBig'

const backgroundImage = {
    uri:
        'https://firebasestorage.googleapis.com/v0/b/tevi-entrenar.appspot.com/o/trama%2Fbackground-app-mobile.png?alt=media&token=7f36cb42-0fac-4d9a-93e8-a79782b5d890',
}
const logoImage = {
    uri:
        'https://firebasestorage.googleapis.com/v0/b/tevi-entrenar.appspot.com/o/logos%2Flogo.png?alt=media&token=bb6fcc5c-a095-4b29-90a5-f35be7d9a1e8',
}

export default function PreLoginComponent({
    handleNavigateSignUpScreen,
    handleNavigateSignInScreen,
}: any) {
    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <StatusBar
                backgroundColor={Colors.primary.dark}
                barStyle="light-content"
            />
            <View style={styles.imageLogoContainer}>
                <View style={styles.circleOne} />
                <View style={styles.barOne} />
                <View style={styles.circleTwo} />
                <View style={styles.barTwo} />
                <View style={styles.circleThree} />
                <View style={styles.barThree} />
                <View style={styles.circleFour} />
                <View style={styles.barFour} />
                <View style={styles.barFive} />
                <View style={styles.barSix} />
                <View style={styles.barSeven} />
                <View style={styles.circleFive} />

                <Animatable.View animation="fadeInUpBig" duration={2000}>
                    <Image style={styles.tinyLogo} source={logoImage} />
                </Animatable.View>
            </View>

            <Animatable.View
                style={styles.buttonsContainer}
                animation="fadeInUpBig"
                duration={1000}
            >
                <ButtonPrimary
                    buttonText="Registrate"
                    onPress={() => handleNavigateSignUpScreen()}
                />

                <ButtonWhite
                    buttonText="Ya tengo una cuenta"
                    onPress={() => handleNavigateSignInScreen()}
                />
            </Animatable.View>
        </ImageBackground>
    )
}

const { height } = Dimensions.get('screen')
const DIMENSIONS_LOGO = height * 0.25

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.dark,
    },
    imageLogoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    circleOne: {
        position: 'absolute',
        height: DIMENSIONS_LOGO,
        width: DIMENSIONS_LOGO,
        top: 210,
        borderRadius: DIMENSIONS_LOGO,
        backgroundColor: Colors.primary.orange,
    },
    barOne: {
        position: 'absolute',
        width: '95%',
        backgroundColor: Colors.primary.white,
        height: 90,
        left: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
    },
    circleTwo: {
        position: 'absolute',
        height: 70,
        width: 70,
        left: 10,
        top: 250,
        borderRadius: 70,
        backgroundColor: Colors.primary.pink,
    },
    barTwo: {
        position: 'absolute',
        width: '65%',
        backgroundColor: Colors.primary.pink,
        height: 30,
        left: -80,
        top: 395,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
    },
    circleThree: {
        position: 'absolute',
        height: 50,
        width: 50,
        right: 40,
        top: 340,
        borderRadius: 30,
        backgroundColor: Colors.primary.orange,
    },
    barThree: {
        position: 'absolute',
        width: '50%',
        backgroundColor: Colors.primary.pink,
        height: 30,
        left: 0,
        top: 80,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
    },
    circleFour: {
        position: 'absolute',
        height: 40,
        width: 40,
        left: 20,
        top: 60,
        borderRadius: 30,
        backgroundColor: Colors.primary.indigo,
    },
    barFour: {
        position: 'absolute',
        width: '35%',
        backgroundColor: Colors.primary.indigo,
        height: 14,
        left: 0,
        top: 120,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
    },
    barFive: {
        position: 'absolute',
        width: '30%',
        backgroundColor: Colors.primary.orange,
        height: 60,
        right: 0,
        top: 150,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
    },
    barSix: {
        position: 'absolute',
        width: '45%',
        backgroundColor: Colors.primary.indigo,
        height: 14,
        right: 0,
        top: 160,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
    },
    barSeven: {
        position: 'absolute',
        width: '20%',
        backgroundColor: Colors.primary.pink,
        height: 20,
        right: 0,
        top: 120,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
    },
    circleFive: {
        position: 'absolute',
        height: 50,
        width: 50,
        right: 10,
        top: 60,
        borderRadius: 30,
        backgroundColor: Colors.primary.pink,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 240,
        height: 120,
        marginBottom: 15,
    },
})
