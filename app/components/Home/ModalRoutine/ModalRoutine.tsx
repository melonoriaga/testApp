import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native'

import Colors from '../../../constants/Colors'
import ModalRoutineDetail from './Details/ModalRoutineDetail'
import RoutineCarouselContainer from './RoutineCarousel/RoutineCarouselContainer'

export default function ModalRoutine({ goBackList, params }: any) {
    const [data, setData] = React.useState({
        showRoutineCarousel: false,
        showRoutinePreview: true,
    })

    const pressShowRoutineCarousel = () => {
        setData({
            ...data,
            showRoutineCarousel: true,
            showRoutinePreview: false,
        })
    }

    const pressShowRoutinePreview = () => {
        setData({
            ...data,
            showRoutineCarousel: false,
            showRoutinePreview: true,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.primary.white} />

            {data.showRoutinePreview && <ModalRoutineDetail params={params} />}

            {data.showRoutineCarousel && (
                <RoutineCarouselContainer
                    params={params}
                    handleGoBack={() => pressShowRoutinePreview()}
                />
            )}

            {data.showRoutinePreview && (
                <View style={styles.routineFooter}>
                    <TouchableOpacity onPress={() => goBackList()}>
                        <Ionicons
                            name="ios-arrow-dropleft"
                            color={Colors.primary.indigo}
                            size={45}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonActivity}
                        onPress={() => pressShowRoutineCarousel()}
                    >
                        <Text style={styles.buttonActivityText}>Comenzar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.white,
        width: '100%',
        paddingTop: 30,
    },
    routineFooter: {
        backgroundColor: Colors.primary.white,
        borderTopWidth: 1,
        borderTopColor: Colors.gray.twenty,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 10,
    },
    buttonActivity: {
        backgroundColor: Colors.primary.indigo,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    buttonActivityText: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.primary.white,
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 3,
    },
})
