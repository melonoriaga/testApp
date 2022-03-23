import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default function ButtonPrimary({ textButton, onPressFunction }: any) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onPressFunction()}
        >
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: Colors.primary.pink,
        paddingVertical: 12,
        marginTop: 8,
        borderRadius: 4,
    },
    buttonText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 4,
    },
})
