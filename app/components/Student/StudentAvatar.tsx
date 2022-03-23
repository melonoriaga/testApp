import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import Colors from '../../constants/Colors'

export default function StudentContainer({
    status,
    picture,
    username,
    gimansio,
}: any) {
    return (
        <View style={styles.avatarContainer}>
            <View style={[styles.avatar]}>
                <Image style={styles.imageProfile} source={{ uri: picture }} />
            </View>

            {status == 'entrenando' && (
                <View style={[styles.status, styles.training]} />
            )}

            {status == 'conectado' && (
                <View style={[styles.status, styles.connected]} />
            )}

            <View>
                <Text style={styles.itemUsername}>@{username}</Text>
                <Text style={styles.gimansio}>#{gimansio}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    imageProfile: {
        width: 34,
        height: 34,
    },
    avatar: {
        overflow: 'hidden',
        borderRadius: 60,
    },
    status: {
        width: 10,
        height: 10,
        borderRadius: 14,
        bottom: 2,
        right: 7,
    },
    training: {
        backgroundColor: Colors.primary.pink,
    },
    connected: {
        backgroundColor: Colors.green,
    },
    itemUsername: {
        marginLeft: 4,
        fontFamily: 'BeVietnam-Regular',
        fontSize: 13,
        color: Colors.primary.white,
    },
    gimansio: {
        marginLeft: 4,
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.fourHundred,
        fontSize: 11,
    },
})
