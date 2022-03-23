import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, Dimensions, ImageBackground } from 'react-native'

import Colors from '../../../../constants/Colors'

export default function ModalRoutineItem({ routine }: any) {
    return (
        <ImageBackground
            source={{ uri: routine.image }}
            style={styles.routineItemCard}
        >
            <LinearGradient
                style={styles.routineTitleContainer}
                colors={[Colors.gray.nineHundred, 'transparent']}
            >
                <Text style={styles.routineTitle}>{routine.title}</Text>
            </LinearGradient>

            <LinearGradient
                style={styles.routineDurationContainer}
                colors={['transparent', Colors.gray.nineHundred]}
            >
                <Text style={styles.routineDuration}>{routine.duration}</Text>
            </LinearGradient>
        </ImageBackground>
    )
}

const { height, width } = Dimensions.get('screen')
const height_routine_image = height * 0.22
const width_routine_image = width * 0.46
const height_routine_title = height * 0.15

const styles = StyleSheet.create({
    routineItemCard: {
        backgroundColor: Colors.primary.pink,
        margin: 4,
        width: width_routine_image,
        height: height_routine_image,
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    routineTitleContainer: {
        height: height_routine_title,
        width: '100%',
        padding: 10,
    },
    routineTitle: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 18,
    },
    routineDurationContainer: {
        padding: 10,
    },
    routineDuration: {
        textAlign: 'right',
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
    },
})
