import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'

import Colors from '../../../../constants/Colors'
import ModalRoutineItem from './ModalRoutineItem'

export default function ModalRoutineDetail({ params }: any) {
    return (
        <>
            <View style={styles.coverPage}>
                <View style={styles.coverPageSubInfo}>
                    <View style={styles.routineDifficultyContainer}>
                        <Text style={styles.routineDifficulty}>
                            {params.difficulty}
                        </Text>
                    </View>

                    <Text style={styles.routineTime}>{params.time}</Text>
                </View>

                <Text style={styles.routineTitle}>{params.name}</Text>

                <Text style={styles.routineDescription}>
                    {params.description}
                </Text>
            </View>

            <View style={styles.routineListContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={styles.routineListContainerScroll}
                    data={params.routines}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <ModalRoutineItem routine={item} />
                    )}
                />
            </View>
        </>
    )
}

const { height } = Dimensions.get('screen')
const height_description = height * 0.28
const height_routine_items = height * 0.6

const styles = StyleSheet.create({
    coverPage: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        height: height_description,
    },
    coverPageSubInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    routineDifficultyContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: Colors.primary.indigo,
    },
    routineDifficulty: {
        fontFamily: 'BeVietnam-Bold',
        fontSize: 14,
        marginBottom: 3,
        color: Colors.primary.white,
    },
    routineTime: {
        fontFamily: 'BeVietnam-Bold',
        fontSize: 12,
        color: Colors.primary.dark,
        textAlign: 'right',
        marginTop: 15,
    },
    routineTitle: {
        color: Colors.primary.indigo,
        fontFamily: 'BeVietnam-ExtraBold',
        fontSize: 30,
        marginBottom: 6,
    },
    routineDescription: {
        fontFamily: 'BeVietnam-Light',
        color: Colors.gray.sevenHundred,
        fontSize: 16,
    },
    routineListContainer: {
        height: height_routine_items,
    },
    routineListContainerScroll: {
        justifyContent: 'center',
    },
})
