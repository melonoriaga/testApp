import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../constants/Colors'

export default function AlertFloatBottom({ messageError, closedError }: any) {
    return (
        <Animatable.View
            animation="fadeInUpBig"
            duration={1000}
            style={styles.messageErrorContainer}
        >
            <View style={styles.cardRelative}>
                <TouchableOpacity
                    style={styles.buttonClosed}
                    onPress={() => closedError()}
                >
                    <Ionicons
                        name="ios-close"
                        color={Colors.primary.white}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={styles.messageError}>{messageError}</Text>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    messageErrorContainer: {
        position: 'absolute',
        bottom: 40,
        left: 30,
        right: 30,
        backgroundColor: Colors.primary.pink,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,
    },
    messageError: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Regular',
        textAlign: 'center',
        fontSize: 14,
    },
    cardRelative: {
        position: 'relative',
        paddingHorizontal: 40,
        paddingVertical: 15,
    },
    buttonClosed: {
        padding: 10,
        position: 'absolute',
        top: -5,
        right: 0,
    },
})
