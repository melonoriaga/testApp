import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../constants/Colors'

const backgroundImage = {
    uri:
        'https://firebasestorage.googleapis.com/v0/b/tevi-entrenar.appspot.com/o/trama%2Fbackground-app-mobile.png?alt=media&token=7f36cb42-0fac-4d9a-93e8-a79782b5d890',
}
const logoImage = {
    uri:
        'https://firebasestorage.googleapis.com/v0/b/tevi-entrenar.appspot.com/o/logo-blanco.png?alt=media&token=06ab340a-1545-4538-adc6-6a1fc3cc57a3',
}

export default function SingUpComponent(props) {
    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.barOne} />
                <View style={styles.barTwo} />
                <View style={styles.barThree} />

                <Animatable.View
                    animation="bounceInLeft"
                    duration={2000}
                    style={styles.logoContainer}
                >
                    <Image style={styles.logoImage} source={logoImage} />
                </Animatable.View>

                <Animatable.Text
                    animation="bounceInRight"
                    delay={500}
                    style={styles.logoText}
                >
                    Bienvenido!! comenzemos!
                </Animatable.Text>
            </View>

            <Animatable.View
                delay={500}
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {props.children}
                </ScrollView>
            </Animatable.View>
        </ImageBackground>
    )
}

const { height } = Dimensions.get('screen')
const width_min_logo = height * 0.2
const heigth_min_logo = height * 0.1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.dark,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        position: 'relative',
    },
    barOne: {
        position: 'absolute',
        width: '55%',
        backgroundColor: Colors.primary.pink,
        top: 40,
        height: 14,
        right: 0,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
    },
    barTwo: {
        position: 'absolute',
        width: '40%',
        backgroundColor: Colors.primary.orange,
        top: 60,
        height: 40,
        right: 0,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
    },
    barThree: {
        position: 'absolute',
        width: '55%',
        backgroundColor: Colors.primary.pink,
        bottom: -4,
        elevation: 4,
        height: 14,
        left: 0,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: width_min_logo,
        height: heigth_min_logo,
    },
    logoText: {
        textAlign: 'center',
        color: Colors.primary.white,
        fontSize: 24,
        fontFamily: 'BeVietnam-Bold',
    },
    footer: {
        elevation: 3,
        backgroundColor: Colors.primary.indigo,
        flex: 3,
        borderTopRightRadius: 20,
        padding: 30,
        justifyContent: 'center',
    },
})
