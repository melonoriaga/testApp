import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import Colors from '../../../constants/Colors'

export default function HistoryStars({ username }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.rowPointsUser}>
                <Ionicons
                    style={styles.startIcon}
                    name="ios-star"
                    size={40}
                    color={Colors.primary.white}
                />

                <Text style={styles.pointsText}>4,3</Text>
            </View>
            <View style={styles.starsRow}>
                <TouchableOpacity
                    onPress={() => alert(`Puntuaste con 1 Star a ${username}`)}
                >
                    <Ionicons
                        style={styles.startIcon}
                        name="ios-star"
                        size={40}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert(`Puntuaste con 2 Star a ${username}`)}
                >
                    <Ionicons
                        style={styles.startIcon}
                        name="ios-star"
                        size={40}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert(`Puntuaste con 3 Star a ${username}`)}
                >
                    <Ionicons
                        style={styles.startIcon}
                        name="ios-star"
                        size={40}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert(`Puntuaste con 4 Star a ${username}`)}
                >
                    <Ionicons
                        style={styles.startIcon}
                        name="ios-star"
                        size={40}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert(`Puntuaste con 5 Star a ${username}`)}
                >
                    <Ionicons
                        style={styles.startIcon}
                        name="ios-star"
                        size={40}
                        color={Colors.primary.white}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    rowPointsUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    pointsText: {
        fontFamily: 'BeVietnam-ExtraBold',
        color: Colors.primary.white,
        marginLeft: 2,
        fontSize: 30,
        marginBottom: 3,
    },
    starsRow: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    startIcon: {
        marginHorizontal: 4,
    },
})
