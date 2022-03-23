import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

import Colors from '../../../constants/Colors'

export default function RoutineToday({ routines, handleNavigation }: any) {
    const navigateModal = (routine: any) => {
        handleNavigation.navigate('RoutineTodayScreen', {
            ...routine,
        })
    }

    const navigateToRoutineFree = () => {
        handleNavigation.navigate('RoutineFreeScreen')
    }

    const backgroundImage = { uri: routines[0].image }

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.routineCardContainer}
        >
            <View style={styles.routineCard}>
                <View style={styles.routineRowButtons}>
                    <TouchableOpacity
                        style={styles.buttonHeader}
                        onPress={() => []}
                    >
                        <MaterialCommunityIcons
                            name="history"
                            color={Colors.gray.five}
                            size={22}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonHeader}
                        onPress={() => []}
                    >
                        <SimpleLineIcons
                            name="options-vertical"
                            size={22}
                            color={Colors.gray.five}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.routineTitleContainer}>
                    <View>
                        <Text style={styles.routineTitle}>
                            Actividad para hoy
                        </Text>

                        <Text style={styles.routineInfoTitle}>
                            {routines[0].name}
                        </Text>

                        <Text style={styles.routineInfoDescription}>
                            {routines[0].description}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonsBottomContainer}>
                    <View style={styles.rowInfoRoutines}>
                        <View style={styles.routineInfoItem}>
                            <Text style={styles.routineInfoLabel}>Tiempo</Text>
                            <Text style={styles.routineInfoValue}>
                                {routines[0].time}
                            </Text>
                        </View>

                        <View style={styles.routineInfoItem}>
                            <Text style={styles.routineInfoLabel}>
                                Dificultad
                            </Text>
                            <Text style={styles.routineInfoValue}>
                                {routines[0].difficulty}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.buttonStartRoutine}
                        onPress={() => navigateModal(routines[0])}
                    >
                        <Text style={styles.buttonStartText}>
                            Comenzar rutina
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStartRoutineFree}
                        onPress={() => navigateToRoutineFree()}
                    >
                        <Text style={styles.buttonStartTextFree}>
                            Actividad libre Actividad libre
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    routineCardContainer: {
        backgroundColor: Colors.primary.black,
        width,
    },
    routineCard: {
        height: '100%',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    routineRowButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    buttonHeader: {
        marginHorizontal: 10,
    },
    routineTitleContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    routineTitle: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.primary.white,
        textTransform: 'uppercase',
        fontSize: 16,
    },
    routineInfoTitle: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: Colors.primary.white,
        fontSize: 32,
        paddingTop: 10,
    },
    routineInfoDescription: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Regular',
        fontSize: 11,
    },
    buttonsBottomContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
    },
    rowInfoRoutines: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
    },
    routineInfoItem: {
        padding: 16,
        borderRadius: 4,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    routineInfoLabel: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.primary.white,
        fontSize: 14,
        width: '100%',
        textAlign: 'center',
    },
    routineInfoValue: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: Colors.primary.white,
        fontSize: 26,
        width: '100%',
        textAlign: 'right',
    },
    buttonStartRoutine: {
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary.pink,
        borderRadius: 4,
    },
    buttonStartText: {
        fontFamily: 'BeVietnam-ExtraBold',
        fontSize: 22,
        color: Colors.primary.white,
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    buttonStartRoutineFree: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonStartTextFree: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 16,
    },
})
