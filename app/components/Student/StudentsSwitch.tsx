import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Colors from '../../constants/Colors'

export default function StudentsSwitch({
    showPartnerList,
    showFriendList,
    activeButtonPartner,
}: any) {
    return (
        <View style={[styles.container]}>
            {activeButtonPartner.showFollowList && (
                <>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => showPartnerList()}
                    >
                        <Text style={[styles.buttonText]}>Compas - 340</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.active]}
                        onPress={() => showFriendList()}
                    >
                        <Text style={[styles.buttonText, styles.activeText]}>
                            Seguidos - 498
                        </Text>
                    </TouchableOpacity>
                </>
            )}

            {activeButtonPartner.showPartnerList && (
                <>
                    <TouchableOpacity
                        style={[styles.button, styles.active]}
                        onPress={() => showPartnerList()}
                    >
                        <Text style={[styles.buttonText, styles.activeText]}>
                            Compas - 340
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={() => showFriendList()}
                    >
                        <Text style={[styles.buttonText]}>Seguidos - 498</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary.dark,
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: -2,
    },
    buttonText: {
        color: Colors.gray.fourHundred,
        fontWeight: 'bold',
        fontFamily: 'BeVietnam-SemiBold',
    },
    active: {
        borderBottomWidth: 4,
        borderBottomColor: Colors.primary.pink,
    },
    activeText: {
        color: Colors.gray.five,
    },
})
