import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native'

import Colors from '../../../constants/Colors'

export default function HistoryGoBack({ goBackList, username, picture }: any) {
    return (
        <View style={styles.modalHeaderContainer}>
            <View style={styles.usernameContainer}>
                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => goBackList()}
                >
                    <Ionicons
                        name="md-arrow-back"
                        color={Colors.primary.white}
                        size={30}
                    />
                </TouchableOpacity>

                <View style={styles.usernameContainer}>
                    <Image
                        style={styles.pictureUser}
                        source={{ uri: picture }}
                    />

                    <Text style={styles.usernameText}>@{username}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalHeaderContainer: {
        position: 'absolute',
        top: 45,
        left: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonHeader: {
        backgroundColor: 'rgba(0, 0, 0, .2)',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    pictureUser: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: Colors.primary.white,
    },
    usernameText: {
        fontFamily: 'BeVietnam-Bold',
        fontSize: 18,
        marginBottom: 4,
        marginLeft: 4,
        color: Colors.gray.five,
    },
})
