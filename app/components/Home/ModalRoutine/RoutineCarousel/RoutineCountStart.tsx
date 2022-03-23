import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Platform } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../../constants/Colors'

export default function RoutineCountStart({ hideChronometer }: any) {
    const [seconds, setSeconds] = useState(5)
    const [isActive, setIsActive] = useState(true)

    const timeInterval = Platform.OS === 'ios' ? 1000 : 3000

    useEffect(() => {
        let interval: any = null
        if (isActive) {
            interval = setInterval(() => {
                if (seconds == 1) {
                    clearInterval(interval)
                    hideChronometer()
                    setIsActive(false)
                }

                setSeconds((seconds) => seconds - 1)
            }, timeInterval)
        }
        return () => clearInterval(interval)
    }, [seconds])

    return (
        <View style={styles.countContainer}>
            <Animatable.Text
                animation="tada"
                duration={1000}
                iterationCount="infinite"
                style={styles.countText}
            >
                {seconds}
            </Animatable.Text>
        </View>
    )
}

const { height, width } = Dimensions.get('screen')
const viewPortWidth = width
const viewPortHeight = height
const styles = StyleSheet.create({
    countContainer: {
        flex: 1,
        width: viewPortWidth,
        height: viewPortHeight,
        backgroundColor: 'rgba(255, 255, 255, .8)',
        position: 'absolute',
        elevation: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        fontSize: 150,
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.indigo,
    },
})
