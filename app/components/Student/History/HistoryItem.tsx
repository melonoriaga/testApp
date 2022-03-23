import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Colors from '../../../constants/Colors'

export default function HistoryItem({ alumnos, handleNavigation }: any) {
    const [useUsername, setUsername] = useState({})

    const handlePressFriendDetail = (props: any) => {
        handleNavigation.navigate('PartnerHistoryScreen', {
            username: props.username,
            data: props,
        })
    }

    const formatUsername = () => {
        const usernameSet: any = {}

        alumnos.map((user: any) => {
            let finalUsername = user.username

            if (finalUsername.length > 12) {
                finalUsername = finalUsername.substr(0, 10) + '...'
            }

            usernameSet[user.id] = finalUsername
        })

        setUsername(usernameSet)
    }

    useEffect(() => {
        formatUsername()

        return () => setUsername({})
    }, [])

    return (
        <View style={styles.historyRowContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={alumnos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.historyContainer}
                        onPress={() => handlePressFriendDetail(item)}
                    >
                        <View style={styles.historyImageContainer}>
                            <Image
                                style={styles.imageProfile}
                                source={{ uri: item.picture }}
                            />
                        </View>

                        <Text style={styles.usernameText}>
                            {useUsername[item.id]}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    historyRowContainer: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary.dark,
    },
    historyContainer: {
        marginHorizontal: 6,
        marginTop: 6,
        marginBottom: 6,
        position: 'relative',
        alignItems: 'center',
    },
    historyImageContainer: {
        width: 76,
        height: 76,
        backgroundColor: Colors.primary.white,
        borderRadius: 90,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageProfile: {
        width: 74,
        height: 74,
        borderRadius: 83,
        borderWidth: 2,
        borderColor: Colors.primary.white,
    },
    usernameText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 10,
    },
})
