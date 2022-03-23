import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../../constants/Colors'

export default function ProfileComponentContainer({
    navigation,
    logOutApp,
}: any) {
    return (
        <View style={styles.container}>
            <Text>Hola desde el container component</Text>
            <Text>Hola desde el container component</Text>

            <TouchableOpacity onPress={() => logOutApp()} style={styles.button}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: Colors.primary.indigo,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 20,
    },

    buttonText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        marginBottom: 3,
        fontSize: 20,
    },
})
