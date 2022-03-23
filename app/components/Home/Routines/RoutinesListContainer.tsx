import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import Colors from '../../../constants/Colors'
import ButtonPrimary from '../../Atoms/Buttons/ButtonPrimary'
import RoutinesItem from './RoutinesItem'

export default function RoutinesListContainer({ routines }: any) {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <Text style={styles.routineTitle}>
                Actividades para los proximos dias
            </Text>

            <View style={styles.routinesItemsContainer}>
                <FlatList
                    data={routines}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => alert('hols')}>
                            <RoutinesItem routine={item} />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.rowButtons}>
                <ButtonPrimary
                    textButton="Solicitar actividad"
                    onPressFunction={() => alert('activemos')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray.five,
        padding: 0,
    },
    routineTitle: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.sevenHundred,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    routinesItemsContainer: {
        flex: 1,
    },
    rowButtons: {
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
    },
    buttonActivityFree: {
        backgroundColor: Colors.primary.dark,
        width: '100%',
        paddingVertical: 8,
        marginTop: 8,
        borderRadius: 8,
    },
    buttonActivityFreeText: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.primary.white,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 4,
    },
})
