import { Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Image,
    Dimensions,
    TextInput,
    Platform,
    ScrollView,
} from 'react-native'

import Colors from '../../../constants/Colors'
import Images from '../../../constants/Images'
import RoutineFreeChronometer from './RoutineFreeChronometer'
import RoutineFreeDone from './RoutineFreeDone'

const timeInterval = Platform.OS === 'ios' ? 1000 : 2700

export default function RoutineFreeComponent({ goBackList }: any) {
    const [doneActivity, setDoneActivity] = useState(false)

    const [seconds, setSeconds] = useState(1)
    const [isActive, setIsActive] = useState(false)
    const [chronometer, setChronometer] = useState(false)

    const [chronometerTime, setChronometerTime] = useState({
        seconds: 0,
        minutes: 0,
    })

    const resetChronometer = () => {
        setSeconds(0)
        setChronometerTime({
            minutes: 0,
            seconds: 0,
        })
    }

    const resetTraining = () => {
        setIsActive(false)
        resetChronometer()
    }

    const togglePauseTraining = () => {
        setIsActive(!isActive)
    }

    const startTraining = () => {
        resetChronometer()

        setIsActive(true)
        setChronometer(true)
    }

    const finishTraining = () => {
        setDoneActivity(true)
        setIsActive(false)
    }

    const handleCloseModal = () => {
        resetChronometer()

        setDoneActivity(false)

        goBackList()
    }

    useEffect(() => {
        let intervalTime: any = null
        let minutes: number = chronometerTime.minutes
        if (isActive) {
            intervalTime = setInterval(() => {
                if (!isActive) {
                    clearInterval(intervalTime)
                    setIsActive(false)
                }

                if (seconds >= 59) {
                    minutes++

                    setChronometerTime({
                        seconds,
                        minutes,
                    })

                    setSeconds(0)
                } else {
                    setChronometerTime({
                        ...chronometerTime,
                        seconds,
                    })

                    setSeconds(seconds + 1)
                }
            }, timeInterval)
        }
        return () => clearInterval(intervalTime)
    }, [isActive, seconds, chronometerTime, chronometer])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.primary.dark} />

            <ScrollView>
                <ImageBackground
                    source={{ uri: Images.plotWallpaper }}
                    style={styles.container}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageLogo}
                            source={{ uri: Images.logoWhite }}
                        />

                        <Text style={styles.textLogo}>Actividad Libre</Text>
                    </View>

                    <View style={styles.viewContainer}>
                        {!chronometer && (
                            <TouchableOpacity
                                style={styles.buttonStart}
                                onPress={() => startTraining()}
                            >
                                <Text style={styles.buttonStartText}>
                                    Comenzar actividad
                                </Text>
                            </TouchableOpacity>
                        )}

                        {chronometer && (
                            <RoutineFreeChronometer
                                chronometerTime={chronometerTime}
                                isActive={isActive}
                                finishTraining={() => finishTraining()}
                                togglePauseTraining={() =>
                                    togglePauseTraining()
                                }
                                resetTraining={() => resetTraining()}
                            >
                                <View style={styles.textAreaContainer}>
                                    <Text style={styles.labelTextArea}>
                                        Notas
                                    </Text>
                                    <TextInput
                                        style={styles.textArea}
                                        multiline
                                        numberOfLines={6}
                                    />
                                </View>
                            </RoutineFreeChronometer>
                        )}
                    </View>
                </ImageBackground>
            </ScrollView>

            <View style={styles.footerActivity}>
                <TouchableOpacity
                    style={styles.buttonIcon}
                    onPress={() => goBackList()}
                >
                    <Ionicons
                        name="ios-arrow-dropleft"
                        size={36}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>

                <View />
            </View>

            {doneActivity && (
                <RoutineFreeDone
                    chronometerTime={chronometerTime}
                    closeModal={() => handleCloseModal()}
                />
            )}
        </SafeAreaView>
    )
}

const { height, width } = Dimensions.get('screen')
const width_modal = width
const height_modal = height * 0.68
const width_logo = width * 0.4
const height_logo = height * 0.1
const width_textarea = width * 0.6
const height_textarea = height * 0.15

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.dark,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width_modal,
        paddingTop: 35,
        position: 'relative',
    },
    imageContainer: {
        alignItems: 'center',
        padding: 10,
        paddingBottom: 30,
    },
    imageLogo: {
        width: width_logo,
        height: height_logo,
    },
    textLogo: {
        marginTop: 6,
        color: Colors.primary.white,
        fontSize: 20,
        fontFamily: 'BeVietnam-Regular',
    },
    viewContainer: {
        width: width_modal,
        height: height_modal,
        flex: 1,
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
    footerActivity: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.primary.dark,
        width: width_modal,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonIcon: {
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    textAreaContainer: {
        marginTop: 10,
        marginBottom: 30,
    },
    labelTextArea: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.sixeHundred,
        fontSize: 16,
    },
    textArea: {
        borderWidth: 2,
        width: width_textarea,
        marginVertical: 4,
        borderColor: Colors.gray.fiveHundred,
        borderRadius: 6,
        padding: 10,
    },
})
