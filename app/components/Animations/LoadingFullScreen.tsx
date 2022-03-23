import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View
                animation="bounceInLeft"
                duration={2000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barOne]}
            />

            <Animatable.View
                animation="bounceInRight"
                duration={3000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barTwo]}
            />

            <Animatable.View
                animation="zoomInRight"
                duration={10000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleOne]}
            />

            <Animatable.View
                animation="fadeInUpBig"
                duration={6000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barThree]}
            />

            <Animatable.View
                animation="lightSpeedOut"
                duration={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barFour]}
            />

            <Animatable.View
                animation="zoomInDown"
                duration={2000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleTwo]}
            />

            <Animatable.View
                animation="fadeOutLeftBig"
                duration={4000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barFive]}
            />

            <Animatable.View
                animation="fadeOutRightBig"
                duration={4000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barSix]}
            />

            <Animatable.View
                animation="zoomInUp"
                duration={4000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleThree]}
            />

            <Animatable.View
                animation="fadeInRightBig"
                duration={4000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barSeven]}
            />

            <Animatable.View
                animation="fadeInDownBig"
                duration={4000}
                delay={500}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleFour]}
            />

            <Animatable.View
                animation="bounceOut"
                duration={1000}
                delay={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleFive]}
            />

            <Animatable.View
                animation="flipOutX"
                duration={1000}
                delay={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barEight]}
            />

            <Animatable.View
                animation="bounceInLeft"
                duration={1000}
                delay={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barNine]}
            />

            <Animatable.View
                animation="bounceInRight"
                duration={1000}
                delay={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.bar, styles.barTen]}
            />

            <Animatable.View
                animation="lightSpeedIn"
                duration={1000}
                delay={1000}
                iterationCount="infinite"
                direction="alternate"
                style={[styles.circle, styles.circleSix]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2A3850',
        position: 'relative',
    },
    bar: {
        position: 'absolute',
        padding: 20,
        borderRadius: 60,
    },
    barOne: {
        top: 100,
        width: '80%',
        backgroundColor: '#F14768',
    },
    barTwo: {
        top: 135,
        padding: 10,
        width: '80%',
        backgroundColor: '#3F416D',
        left: 0,
    },
    barThree: {
        top: 240,
        right: 0,
        padding: 30,
        backgroundColor: '#fff',
        width: '60%',
    },
    barFour: {
        top: 290,
        padding: 10,
        width: '80%',
        backgroundColor: '#3F416D',
        left: 0,
    },
    barFive: {
        top: 440,
        right: -20,
        padding: 15,
        backgroundColor: '#3F416D',
        width: '90%',
    },
    barSix: {
        top: 465,
        right: -20,
        padding: 12,
        backgroundColor: '#F59778',
        width: '80%',
    },
    barSeven: {
        top: 590,
        left: -40,
        padding: 32,
        backgroundColor: '#F14768',
        width: '95%',
    },
    barEight: {
        top: 700,
        right: -40,
        padding: 16,
        backgroundColor: '#fff',
        width: '95%',
    },
    barNine: {
        top: 780,
        left: 10,
        padding: 20,
        backgroundColor: '#F14768',
        width: '60%',
    },
    barTen: {
        top: 810,
        left: 40,
        padding: 10,
        backgroundColor: '#3F416D',
        width: '80%',
    },
    circle: {
        position: 'absolute',
        padding: 50,
        borderRadius: 50,
    },
    circleOne: {
        top: 200,
        left: 20,
        padding: 30,
        backgroundColor: '#F59778',
    },
    circleTwo: {
        top: 300,
        left: 40,
        padding: 40,
        backgroundColor: '#F1486A',
    },
    circleThree: {
        top: 500,
        right: 40,
        padding: 22,
        backgroundColor: '#fff',
    },
    circleFour: {
        top: 630,
        left: 40,
        padding: 42,
        backgroundColor: '#3F416D',
    },
    circleFive: {
        top: 640,
        left: 160,
        padding: 22,
        backgroundColor: '#F59778',
    },
    circleSix: {
        top: 830,
        right: 10,
        padding: 40,
        backgroundColor: '#fff',
    },
})
