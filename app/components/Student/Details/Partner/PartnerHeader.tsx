import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

import Colors from '../../../../constants/Colors'

export default function DetailHeader({ username, goBackList }: any) {
    return (
        <View style={styles.modalHeaderContainer}>
            <View style={styles.usernameContainer}>
                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => goBackList()}
                >
                    <Ionicons
                        style={styles.inputIcon}
                        name="md-arrow-back"
                        color={Colors.gray.five}
                        size={28}
                    />
                </TouchableOpacity>

                <Text style={styles.usernameText}>@{username}</Text>
            </View>

            <View style={styles.rowButtons}>
                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => goBackList()}
                >
                    <MaterialCommunityIcons
                        style={styles.inputIcon}
                        name="chat-outline"
                        color={Colors.gray.five}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalHeaderContainer: {
        paddingHorizontal: 4,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usernameText: {
        fontFamily: 'BeVietnam-Bold',
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 4,
        color: Colors.gray.five,
    },
    buttonHeader: {
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    inputIcon: {
        marginRight: 12,
    },
    rowButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
