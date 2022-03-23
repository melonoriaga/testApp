import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Colors from '../../../constants/Colors'

export default function RoutinesItem({ routine }: any) {
    return (
        <View style={styles.routineCard}>
            <View style={styles.routineImageContainer}>
                <Image
                    style={styles.routineImage}
                    source={{ uri: routine.image }}
                />
            </View>

            <View style={styles.routineInfoContainer}>
                <Text style={styles.routineName}>{routine.name}</Text>

                <View style={styles.routineDetailRow}>
                    <Text style={styles.routineDifficulty}>
                        {routine.difficulty}
                    </Text>

                    <Text style={styles.routineTime}>{routine.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    routineCard: {
        backgroundColor: Colors.primary.white,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.gray.ten,
        overflow: 'hidden',
    },
    routineImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    routineImage: {
        width: '100%',
        height: 68,
        marginRight: 12,
    },
    routineInfoContainer: {
        flex: 2.5,
        justifyContent: 'space-between',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    routineName: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.gray.nineHundred,
        fontSize: 20,
    },
    routineDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    routineDifficulty: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.sevenHundred,
        fontSize: 14,
    },
    routineTime: {
        color: Colors.gray.sevenHundred,
        fontFamily: 'BeVietnam-Regular',
    },
})
