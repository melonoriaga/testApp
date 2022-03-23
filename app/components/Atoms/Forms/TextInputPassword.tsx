import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../constants/Colors'

export default function TextInputPassword(props: any) {
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
                    placeholder={props.placeholderText}
                    placeholderTextColor={Colors.gray.fourHundred}
                    autoCapitalize="none"
                    secureTextEntry={!!props.secureTextValue}
                    {...props}
                />

                {props.secureTextValue ? (
                    <TouchableOpacity
                        onPress={() => props.toggleSecureEntry()}
                        style={styles.inputIconButton}
                    >
                        <Ionicons
                            style={styles.inputIcon}
                            name="ios-eye-off"
                            color={Colors.gray.sixeHundred}
                            size={24}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => props.toggleSecureEntry()}
                        style={styles.inputIconButton}
                    >
                        <Ionicons
                            style={styles.inputIcon}
                            name="ios-eye"
                            color={Colors.gray.sixeHundred}
                            size={24}
                        />
                    </TouchableOpacity>
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
        color: 'white',
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
        marginRight: 10,
        width: '10%',
    },
    messageError: {
        marginBottom: 10,
        color: '#ea2c62',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputIconButton: {
        width: 200,
    },
})
