import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Colors from '../../../../constants/Colors'
import CarouselItem from './CarouselItem'
import RoutineCountStart from './RoutineCountStart'
import RoutineDoneAlert from './RoutineDoneAlert'

const { height, width } = Dimensions.get('screen')
const width_screen = width
const width_item = width * 0.84
const height_footer = height * 0.25

const timeInterval = Platform.OS === 'ios' ? 1000 : 2700

export default function RoutineCarouselContainer({
    params,
    handleGoBack,
}: any) {
    const [indexCount, setItem] = React.useState({
        view: 1,
    })

    const [chronometer, setChronometer] = React.useState({
        show: true,
    })

    const [doneActivity, setDoneActivity] = React.useState(false)

    const [seconds, setSeconds] = React.useState(1)
    const [isActive, setIsActive] = React.useState(false)

    const [chronometerTime, setChronometerTime] = React.useState({
        seconds: 0,
        minutes: 0,
    })

    const changeItem = (currentItem: any) => {
        setItem({
            view: currentItem.index + 1,
        })
    }

    const hideChronometer = () => {
        setChronometer({
            show: false,
        })

        setIsActive(true)
    }

    const stopTraining = () => {
        setIsActive(false)
        setSeconds(0)
        setDoneActivity(true)
    }

    const togglePauseTraining = () => {
        setIsActive(!isActive)
    }

    const cancelTraining = () => {
        setIsActive(false)
        setSeconds(0)
        setChronometerTime({
            minutes: 0,
            seconds: 0,
        })

        setTimeout(() => {
            handleGoBack()
        }, 700)
    }

    const handleCloseModal = () => {
        setDoneActivity(false)
        cancelTraining()
    }

    React.useEffect(() => {
        let interval: any = null
        let minutes: number = chronometerTime.minutes

        if (isActive) {
            interval = setInterval(() => {
                if (!isActive) {
                    clearInterval(interval)
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
        return () => {
            clearInterval(interval)
        }
    }, [isActive, seconds, chronometerTime])

    const _renderItem = ({ item }: any) => {
        return <CarouselItem item={item} indexCount={indexCount} />
    }

    return (
        <View style={styles.container}>
            <Carousel
                data={params.routines}
                renderItem={_renderItem}
                sliderWidth={width_screen}
                itemWidth={width_item}
                onSnapToItem={(index: any) => changeItem({ index })}
                inactiveSlideShift={0}
                useScrollView
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
            >
                <View style={styles.infoFooter}>
                    <View style={styles.timeTrainingLabel}>
                        <Text style={[styles.timeTrainingTitle]}>
                            Tiempo activo
                        </Text>
                        <View style={styles.chronometerTimeContainer}>
                            <View style={styles.chronometerTimeCard}>
                                <Text style={styles.chronometerTimer}>
                                    {chronometerTime.minutes}
                                </Text>
                                <Text style={styles.chronometerTimeSubtitle}>
                                    min
                                </Text>
                            </View>
                            <Text style={styles.chronometerTimerEqual}>:</Text>
                            <View style={styles.chronometerTimeCard}>
                                <Text style={styles.chronometerTimer}>
                                    {chronometerTime.seconds}
                                </Text>
                                <Text style={styles.chronometerTimeSubtitle}>
                                    sec
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonsIconsRow}>
                            <TouchableOpacity
                                style={styles.buttonStop}
                                onPress={() => cancelTraining()}
                            >
                                <Ionicons
                                    name="md-stopwatch"
                                    size={36}
                                    color={Colors.primary.indigo}
                                />

                                <Text style={styles.buttonStopText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>

                            {isActive ? (
                                <TouchableOpacity
                                    style={styles.buttonStop}
                                    onPress={() => togglePauseTraining()}
                                >
                                    <Ionicons
                                        name="ios-pause"
                                        size={36}
                                        color={Colors.primary.indigo}
                                    />

                                    <Text style={styles.buttonStopText}>
                                        Pause
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styles.buttonStop}
                                    onPress={() => togglePauseTraining()}
                                >
                                    <Ionicons
                                        name="ios-play"
                                        size={36}
                                        color={Colors.primary.indigo}
                                    />

                                    <Text style={styles.buttonStopText}>
                                        Play
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>

                        <TouchableOpacity
                            style={styles.buttonDone}
                            onPress={() => stopTraining()}
                        >
                            <Ionicons
                                name="ios-checkmark"
                                size={40}
                                color={Colors.primary.white}
                                style={styles.buttonDoneIcon}
                            />
                            <Text style={styles.buttonDoneText}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {doneActivity && (
                <RoutineDoneAlert
                    closeModal={() => handleCloseModal()}
                    chronometerTime={chronometerTime}
                />
            )}

            {chronometer.show && (
                <RoutineCountStart hideChronometer={() => hideChronometer()} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray.ten,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        position: 'relative',
        elevation: 9,
    },
    infoFooter: {
        height: height_footer,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    timeTrainingLabel: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    timeTrainingTitle: {
        fontFamily: 'BeVietnam-Light',
        color: Colors.gray.sevenHundred,
        fontSize: 16,
    },
    chronometerTimeContainer: {
        flexDirection: 'row',
        marginTop: 6,
        alignItems: 'center',
    },
    chronometerTimeCard: {
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary.indigo,
        paddingVertical: 8,
        width: 100,
        borderRadius: 8,
    },
    chronometerTimer: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 34,
    },
    chronometerTimerEqual: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.indigo,
        fontSize: 40,
        marginBottom: 10,
    },
    chronometerTimeSubtitle: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 12,
    },
    buttonsContainer: {
        padding: 10,
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonsIconsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonDone: {
        paddingHorizontal: 16,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: Colors.primary.indigo,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonDoneText: {
        fontFamily: 'BeVietnam-Regular',
        marginBottom: 3,
        fontSize: 20,
        color: Colors.primary.white,
    },
    buttonDoneIcon: {
        marginRight: 10,
    },
    buttonStop: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonStopText: {
        fontFamily: 'BeVietnam-Regular',
        marginBottom: 3,
        fontSize: 10,
        color: Colors.primary.indigo,
    },
})
