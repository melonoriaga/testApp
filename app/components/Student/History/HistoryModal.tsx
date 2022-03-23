import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import {
    StyleSheet,
    Text,
    StatusBar,
    SafeAreaView,
    Image,
    View,
    Dimensions,
} from 'react-native'

import Colors from '../../../constants/Colors'
import HistoryGoBack from './HistoryGoBack'
import HistoryStars from './HistoryStars'

export default function PartnerHistoryModal({ goBackList, data }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.primary.black} />

            <View style={styles.historyContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageHistory}
                        source={{ uri: data.picture }}
                    />
                </View>

                <View style={styles.labelGoal}>
                    <Ionicons
                        style={styles.iconMessage}
                        name="ios-star"
                        size={60}
                        color={Colors.primary.white}
                    />

                    <Text style={styles.goalText}>
                        Mensaje con algun logro!!
                    </Text>
                </View>
            </View>

            <HistoryGoBack
                username={data.username}
                picture={data.picture}
                goBackList={() => goBackList()}
            />

            <HistoryStars />
        </SafeAreaView>
    )
}

const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height,
        paddingTop: 40,
        backgroundColor: Colors.primary.black,
    },
    historyContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    imageContainer: {
        width,
        height,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    imageHistory: {
        width,
        height,
    },
    labelGoal: {
        width,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        paddingVertical: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goalText: {
        fontFamily: 'BeVietnam-Regular',
        fontSize: 20,
        marginBottom: 2,
        color: Colors.primary.white,
    },
    iconMessage: {
        marginLeft: 20,
    },
})
