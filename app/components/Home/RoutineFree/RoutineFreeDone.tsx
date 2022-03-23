import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../constants/Colors'

const { height, width } = Dimensions.get('screen')
const width_modal = width * 0.9
const height_modal = height * 0.6

export default function RoutineFreeDone({ chronometerTime, closeModal }: any) {
    return (
        <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.modalContainer}
        >
            <View style={styles.modalContainerBackground}>
                <View>
                    <Text style={styles.modalAlertText}>SUPER!</Text>

                    <Ionicons
                        style={styles.modalAlertIcon}
                        name="md-happy"
                        size={100}
                        color={Colors.primary.pink}
                    />
                </View>

                <View style={styles.modalMessage}>
                    <Text style={styles.modalTextPrimary}>
                        Complestaste tu actividad de hoy!
                    </Text>
                    <View style={styles.modalRowTime}>
                        <Text style={styles.modalTextSecondary}>
                            Tiempo total
                        </Text>
                        <View style={styles.timeRow}>
                            <View style={styles.timeItem}>
                                <Text style={styles.modalTime}>
                                    {chronometerTime.minutes}
                                </Text>
                                <Text style={styles.smallText}>min</Text>
                            </View>
                            <Text style={styles.modalTimeEqual}>:</Text>
                            <View style={styles.timeItem}>
                                <Text style={styles.modalTime}>
                                    {chronometerTime.seconds}
                                </Text>
                                <Text style={styles.smallText}>sec</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => closeModal()}
                    >
                        <Text style={styles.modalButtonText}>Listo!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        bottom: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    modalContainerBackground: {
        borderRadius: 10,
        overflow: 'hidden',
        width: width_modal,
        height: height_modal,
        backgroundColor: Colors.primary.white,
        paddingVertical: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    modalAlertText: {
        fontFamily: 'BeVietnam-ExtraBold',
        fontSize: 50,
        textAlign: 'center',
        color: Colors.primary.dark,
    },
    modalAlertIcon: {
        textAlign: 'center',
    },
    modalMessage: {
        paddingVertical: 20,
        paddingHorizontal: 40,
    },
    modalTextPrimary: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.dark,
        fontSize: 28,
        marginBottom: 26,
        textAlign: 'center',
    },
    modalRowTime: {
        backgroundColor: Colors.primary.indigo,
        borderRadius: 4,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
    },
    modalTextSecondary: {
        fontFamily: 'BeVietnam-Medium',
        fontSize: 18,
        color: Colors.primary.white,
    },
    timeItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
    modalTime: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 60,
        marginBottom: -10,
    },
    modalTimeEqual: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.indigo,
        fontSize: 40,
        marginBottom: 10,
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallText: {
        fontFamily: 'BeVietnam-Medium',
        color: Colors.gray.fiveHundred,
        fontSize: 14,
    },
    modalButton: {
        backgroundColor: Colors.primary.pink,
        marginTop: 30,
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    modalButtonText: {
        textAlign: 'center',
        fontFamily: 'BeVietnam-Medium',
        color: Colors.primary.white,
        fontSize: 20,
        marginBottom: 3,
    },
})
