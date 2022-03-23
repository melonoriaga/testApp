import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'

import Colors from '../../constants/Colors'
import Logo from '../../constants/Images'

export default function StudentHeader(props: any) {
    return (
        <View style={styles.logoHeaderContainer}>
            <Image
                style={styles.logoHeader}
                source={{ uri: Logo.logoFinalWhite }}
            />
            <View style={styles.rowButtons}>
                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => []}
                >
                    <Ionicons
                        name="md-search"
                        color={Colors.gray.five}
                        size={22}
                    />
                </TouchableOpacity>

                {props.children}

                <TouchableOpacity
                    style={styles.buttonHeader}
                    onPress={() => []}
                >
                    <MaterialCommunityIcons
                        name="chat"
                        color={Colors.gray.five}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoHeaderContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoHeader: {
        width: 60,
        height: 32,
    },
    buttonHeader: {
        paddingLeft: 30,
    },
    rowButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
