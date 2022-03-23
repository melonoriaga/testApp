import { Ionicons, EvilIcons, Fontisto } from '@expo/vector-icons'
import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Colors from '../../../constants/Colors'

export default function StudentPartnerItem({ items, children }: any) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.rowUserInfo}>{children}</View>

            {items.lastPost && (
                <>
                    <View style={styles.imagePostContainer}>
                        <Image
                            style={styles.imagePost}
                            source={{ uri: items.lastPost.picture }}
                        />

                        {items.estado == 'entrenando' && (
                            <View style={styles.rowStartsAbsolute}>
                                <View style={styles.rowStartContainer}>
                                    <View style={styles.rowStart}>
                                        <Ionicons
                                            name="ios-star"
                                            style={styles.iconStart}
                                            color={Colors.primary.white}
                                        />

                                        <Ionicons
                                            name="ios-star"
                                            style={styles.iconStart}
                                            color={Colors.primary.white}
                                        />

                                        <Ionicons
                                            name="ios-star"
                                            style={styles.iconStart}
                                            color={Colors.primary.white}
                                        />

                                        <Ionicons
                                            name="ios-star"
                                            style={styles.iconStart}
                                            color={Colors.primary.white}
                                        />

                                        <Ionicons
                                            name="ios-star"
                                            style={styles.iconStart}
                                            color={Colors.primary.white}
                                        />
                                    </View>

                                    <Ionicons
                                        style={styles.buttonStart}
                                        name="ios-star"
                                        size={30}
                                        color={Colors.primary.pink}
                                    />
                                </View>
                            </View>
                        )}
                    </View>

                    <View style={styles.buttonsRow}>
                        <View style={styles.teviRow}>
                            <EvilIcons
                                name="eye"
                                size={30}
                                color={Colors.primary.white}
                                style={styles.buttonsIcon}
                            />
                            <Text style={styles.buttonsText}>44</Text>

                            <Fontisto
                                name="comment"
                                size={20}
                                color={Colors.primary.white}
                                style={styles.buttonsIcon}
                            />
                            <Text style={styles.buttonsText}>5</Text>
                        </View>

                        {/* <View style={styles.rowStart}>
                            <View style={styles.rowStart}>
                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color={Colors.primary.pink}
                                />

                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color={Colors.primary.pink}
                                />

                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color={Colors.primary.pink}
                                />

                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color={Colors.primary.pink}
                                />

                                <Ionicons
                                    name="ios-star"
                                    size={16}
                                    color={Colors.primary.pink}
                                />
                            </View>

                            <Ionicons
                                style={styles.buttonStart}
                                name="ios-star"
                                size={30}
                                color={Colors.primary.white}
                            />
                        </View> */}
                    </View>

                    <View style={styles.pictureFooterContainer}>
                        <Text style={styles.pictureFooter}>
                            {items.lastPost.pie_picture}
                        </Text>
                    </View>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 16,
    },
    imagePostContainer: {
        width: '100%',
        height: 280,
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imagePost: {
        width: '100%',
        height: '100%',
    },
    rowUserInfo: {
        flexDirection: 'row',
    },
    itemTimeContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: Colors.primary.indigo,
        borderRadius: 20,
    },
    timeTitle: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
        fontSize: 12,
        marginLeft: 6,
        marginBottom: 2,
    },
    itemContainer: {
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray.ten,
    },
    rowStartsAbsolute: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        borderRadius: 4,
        paddingHorizontal: 12,
    },
    rowStartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowStart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStart: {
        marginLeft: 8,
    },
    iconStart: {
        fontSize: 13,
    },
    routineTitle: {
        marginLeft: 6,
        marginBottom: 3,
        fontSize: 12,
        fontFamily: 'BeVietnam-Bold',
        color: Colors.gray.eightHundred,
    },
    pictureFooterContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: 2,
    },
    pictureFooter: {
        fontFamily: 'BeVietnam-Regular',
        color: Colors.gray.ten,
        fontSize: 14,
    },
    buttonsRow: {
        marginTop: 6,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    teviRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonsIcon: {
        marginRight: 5,
    },
    buttonsText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        marginBottom: 3,
        fontSize: 18,
        marginRight: 20,
    },
})
