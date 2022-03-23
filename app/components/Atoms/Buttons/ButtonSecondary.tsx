import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default function ButtonSecondary({ textButton, onPressFunction }: any) {
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
        backgroundColor: Colors.gray.five,
        borderRadius: 4,
        paddingVertical: 4,
        marginHorizontal: 20,
        marginTop: 8,
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.dark,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 4,
    },
})
