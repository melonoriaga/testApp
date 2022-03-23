import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import Colors from '../../../constants/Colors'

export default function RoutineFreeChronometer({
    chronometerTime,
    isActive,
    togglePauseTraining,
    children,
    finishTraining,
    resetTraining,
}: any) {
    return (
        <View style={styles.rowTimeTranscurrent}>
            <Text style={styles.timeTranscurrentTitle}>Tiempo activo</Text>

            <View style={styles.rowTimeChronometer}>
                <View style={styles.timeItemContainer}>
                    <Text style={styles.timeText}>
                        {chronometerTime.minutes}
                    </Text>
                    <Text style={styles.timeTextSmall}>min</Text>
                </View>

                <View style={styles.timeItemContainer}>
                    <Text style={styles.timeText}>
                        {chronometerTime.seconds}
                    </Text>
                    <Text style={styles.timeTextSmall}>sec</Text>
                </View>
            </View>

            <View>{children}</View>

            <View style={styles.buttonsRowFlex}>
                <View style={styles.buttonsRowLeft}>
                    <TouchableOpacity
                        style={styles.buttonStop}
                        onPress={() => resetTraining()}
                    >
                        <Ionicons
                            name="md-stopwatch"
                            size={30}
                            color={Colors.primary.indigo}
                        />

                        <Text style={styles.buttonStopText}>Resetear</Text>
                    </TouchableOpacity>

                    {isActive ? (
                        <TouchableOpacity
                            style={styles.buttonStop}
                            onPress={() => togglePauseTraining()}
                        >
                            <Ionicons
                                name="ios-pause"
                                size={30}
                                color={Colors.primary.indigo}
                            />

                            <Text style={styles.buttonStopText}>Pause</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.buttonStop}
                            onPress={() => togglePauseTraining()}
                        >
                            <Ionicons
                                name="ios-play"
                                size={30}
                                color={Colors.primary.indigo}
                            />

                            <Text style={styles.buttonStopText}>Play</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity
                    style={styles.buttonStart}
                    onPress={() => finishTraining()}
                >
                    <Text style={styles.buttonStartTextSmall}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width } = Dimensions.get('screen')
const width_time_container = width * 0.8

const styles = StyleSheet.create({
    rowTimeTranscurrent: {
        backgroundColor: Colors.primary.white,
        width: width_time_container,
        borderRadius: 4,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeTranscurrentTitle: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.sevenHundred,
        fontSize: 16,
        marginBottom: 16,
    },
    rowTimeChronometer: {
        flexDirection: 'row',
    },
    timeItemContainer: {
        backgroundColor: Colors.primary.indigo,
        width: 110,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 5,
        marginBottom: 10,
    },
    timeText: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: Colors.primary.white,
        fontSize: 44,
    },
    timeTextSmall: {
        color: Colors.primary.white,
        fontSize: 14,
        fontFamily: 'BeVietnam-Regular',
    },
    buttonsRowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonsRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStopText: {
        fontFamily: 'BeVietnam-Regular',
        marginBottom: 3,
        fontSize: 10,
        color: Colors.primary.indigo,
    },
    buttonIcon: {
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    buttonStop: {
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonStart: {
        backgroundColor: Colors.primary.pink,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 4,
    },
    buttonStartText: {
        color: Colors.primary.white,
        fontSize: 24,
        fontFamily: 'BeVietnam-Bold',
        marginBottom: 4,
    },
    buttonStartTextSmall: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.primary.white,
        fontSize: 16,
        marginBottom: 4,
    },
})
