import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    Platform,
    Switch,
} from 'react-native'

import Colors from '../../../../constants/Colors'

const { height, width } = Dimensions.get('screen')
const width_item = width * 0.84
const height_image = height * 0.38

const height_screen = Platform.OS === 'ios' ? height * 0.65 : height * 0.69

export default function CarouselItem({ item, indexCount }: any) {
    const [activityCheck, setActivityCheck] = useState(false)

    const toggleSwitch = (id: number) => {
        setActivityCheck(!activityCheck)
    }

    useEffect(() => {
        return () => setActivityCheck(false)
    }, [])

    return (
        <View style={[styles.carouselContainer]}>
            <View style={[styles.imageRoutineContainer]}>
                <Image
                    style={styles.imageRoutine}
                    source={{ uri: item.image }}
                />

                <View style={[styles.indexLabel]}>
                    <Text style={[styles.indexText]}>{indexCount.view}</Text>
                </View>

                <View style={[styles.durationLabel]}>
                    <Text style={[styles.durationText]}>{item.duration}</Text>
                </View>

                {activityCheck && (
                    <View style={[styles.statusActivityContainer]}>
                        <Ionicons
                            name="ios-checkmark"
                            size={50}
                            color={Colors.primary.white}
                        />
                    </View>
                )}
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.routineInfoContainer]}>
                    <Text style={styles.routineTitle}>{item.title}</Text>
                    <Text style={styles.routineDescription}>
                        {item.description}
                    </Text>
                    <Text>{item.text}</Text>
                </View>

                {item.series && (
                    <View style={[styles.rowDetails]}>
                        <Text style={[styles.titleLabel]}>Series</Text>
                        <Text style={[styles.text]}>{item.series}</Text>
                    </View>
                )}

                {item.repetitions && (
                    <View style={[styles.rowDetails, styles.paddingBottom10]}>
                        <Text style={[styles.titleLabel]}>repetitions</Text>
                        <Text style={[styles.text]}>{item.repetitions}</Text>
                    </View>
                )}

                <View style={[styles.checkboxContainer]}>
                    <Text style={[styles.checkboxLabel]}>
                        Marcar cuando la actividad este lista
                    </Text>
                    <Switch
                        trackColor={{
                            false: Colors.gray.thirty,
                            true: Colors.primary.pink,
                        }}
                        thumbColor={
                            activityCheck
                                ? Colors.primary.white
                                : Colors.gray.ten
                        }
                        ios_backgroundColor={Colors.gray.thirty}
                        onValueChange={() => toggleSwitch(item.id)}
                        value={activityCheck}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    carouselContainer: {
        height: height_screen,
        backgroundColor: Colors.primary.white,
        borderRadius: 8,
        shadowColor: Colors.gray.sevenHundred,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.gray.twenty,
    },
    imageRoutineContainer: {
        position: 'relative',
        width: width_item,
        height: height_image,
    },
    imageRoutine: {
        width: width_item,
        height: height_image,
        borderBottomWidth: 1,
        borderColor: Colors.gray.twenty,
    },
    durationLabel: {
        position: 'absolute',
        backgroundColor: Colors.primary.indigo,
        bottom: 10,
        left: 10,
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderRadius: 20,
    },
    indexLabel: {
        position: 'absolute',
        backgroundColor: Colors.primary.dark,
        top: 10,
        left: 10,
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indexText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        marginBottom: 3,
        fontSize: 16,
    },
    durationText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        marginBottom: 3,
    },
    routineInfoContainer: {
        paddingHorizontal: 14,
        paddingBottom: 10,
        paddingTop: 4,
    },
    routineTitle: {
        fontFamily: 'BeVietnam-Bold',
        fontSize: 24,
        color: Colors.gray.nineHundred,
        textTransform: 'capitalize',
    },
    statusActivityContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary.pink,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    routineDescription: {
        fontFamily: 'BeVietnam-Regular',
        fontSize: 14,
        color: Colors.gray.nineHundred,
        textTransform: 'capitalize',
    },
    rowDetails: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'flex-end',
    },
    paddingBottom10: {
        paddingBottom: 10,
    },
    titleLabel: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.fiveHundred,
        fontSize: 18,
        marginRight: 10,
        marginBottom: 1,
    },
    text: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.gray.nineHundred,
        fontSize: 22,
    },
    checkboxContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkboxLabel: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.nineHundred,
        fontSize: 12,
        marginBottom: 3,
    },
    checkbox: {
        alignSelf: 'center',
        width: 30,
        height: 30,
    },
})
