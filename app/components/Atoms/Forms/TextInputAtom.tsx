import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../constants/Colors'

export default function TextInputAtom(props: any) {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{props.labelTitle}</Text>

            <View style={styles.inputIconText}>
                <Ionicons
                    style={styles.inputIcon}
                    name={props.iconName}
                    color={props.iconColor}
                    size={props.iconSize}
                />

                <TextInput
                    style={styles.inputText}
                    placeholder={props.placeholderVaule}
                    placeholderTextColor={Colors.gray.fourHundred}
                    autoCapitalize="none"
                    {...props}
                />

                {props.textInputChange ? (
                    <Animatable.View
                        style={styles.inputIconContainer}
                        animation="bounceIn"
                    >
                        <Ionicons
                            style={styles.inputIcon}
                            name="md-checkmark-circle-outline"
                            color={Colors.primary.pink}
                            size={24}
                        />
                    </Animatable.View>
                ) : (
                    <></>
                )}
            </View>

            {props.isValidValue ? null : (
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.messageError}>
                        {props.messageError}
                    </Text>
                </Animatable.View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 14,
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 2,
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
    },
    inputIconText: {
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        fontSize: 20,
        width: '100%',
        fontFamily: 'BeVietnam-Regular',
    },
    inputText: {
        width: '80%',
    },
    inputIconContainer: {
        width: 200,
    },
    inputIcon: {
        marginRight: 5,
        width: '10%',
    },
    messageError: {
        marginBottom: 2,
        color: Colors.primary.pink,
        fontSize: 16,
        fontWeight: 'bold',
    },
})
