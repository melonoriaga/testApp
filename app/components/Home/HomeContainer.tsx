import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Colors from '../../constants/Colors'
import routines from '../../model/routines'
import HomeHeader from './HomeHeader'
import RoutineToday from './Routines/RoutineToday'
import RoutinesListContainer from './Routines/RoutinesListContainer'

export default function HomeContainer({ handleNavigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                style="inverted"
                backgroundColor={Colors.primary.black}
            />

            <HomeHeader handleNavigation={handleNavigation} />

            <RoutineToday
                handleNavigation={handleNavigation}
                routines={routines}
            />

            {/* <RoutinesListContainer routines={routines} /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: Colors.primary.black,
    },
    logoHeaderContainer: {
        paddingHorizontal: 20,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoHeader: {
        width: 65,
        height: 32,
    },
    buttonHeader: {
        paddingLeft: 20,
    },
    inputIcon: {
        marginRight: 12,
    },
})
