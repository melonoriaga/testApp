import { Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Linking,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import Colors from '../../../../constants/Colors'
import Images from '../../../../constants/Images'
import FollowHeader from './FollowHeader'

export default function PartnerDetail({ goBackList, username, data }: any) {
    const _renderInstagram = (data: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(data.link)
                }}
                style={styles.rowContactItem}
            >
                <MaterialCommunityIcons
                    style={styles.contactIcon}
                    name="instagram"
                    color={Colors.gray.ten}
                />

                <Text style={styles.contactText}>{data.name}</Text>
            </TouchableOpacity>
        )
    }

    const _renderFacebook = (data: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(data.link)
                }}
                style={styles.rowContactItem}
            >
                <Ionicons
                    style={styles.contactIcon}
                    name="logo-facebook"
                    color={Colors.gray.ten}
                />

                <Text style={styles.contactText}>{data.name}</Text>
            </TouchableOpacity>
        )
    }

    const _renderTwitter = (data: any) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL(data.link)
                }}
                style={styles.rowContactItem}
            >
                <Ionicons
                    style={styles.contactIcon}
                    name="logo-twitter"
                    color={Colors.gray.ten}
                />

                <Text style={styles.contactText}>{data.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                style="inverted"
                backgroundColor={Colors.primary.black}
            />

            <FollowHeader username={username} goBackList={() => goBackList()} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.coverPageRow}>
                    <View style={styles.imageProfileContainer}>
                        <Image
                            style={styles.imageProfile}
                            source={{ uri: data.picture }}
                        />

                        <View style={[styles.rowPoints]}>
                            <View style={styles.pointCol}>
                                <Ionicons
                                    name="md-eye"
                                    color={Colors.primary.white}
                                    size={26}
                                />
                                <Text style={styles.pointsText}>345</Text>
                            </View>

                            <View style={styles.pointCol}>
                                <Ionicons
                                    name="md-star"
                                    color={Colors.primary.white}
                                    size={26}
                                />
                                <Text style={styles.pointsText}>4.6</Text>
                            </View>
                        </View>

                        {data.estado == 'entrenando' && (
                            <View
                                style={[
                                    styles.statusProfile,
                                    styles.statusActive,
                                ]}
                            />
                        )}

                        {data.estado == 'conectado' && (
                            <View
                                style={[
                                    styles.statusProfile,
                                    styles.statusConnected,
                                ]}
                            />
                        )}

                        {data.estado == 'entrenando' && (
                            <Animatable.View
                                animation="pulse"
                                iterationCount="infinite"
                                style={styles.rowActivityActive}
                            >
                                <Text style={styles.activityText}>
                                    Activo ...{' '}
                                </Text>
                                <Text style={styles.activityText}>
                                    {data.ejercicio}
                                </Text>
                            </Animatable.View>
                        )}
                    </View>
                </View>

                <View style={styles.rowSayHi}>
                    <View style={styles.rowFollowAndTevi}>
                        <TouchableOpacity
                            style={styles.teviButton}
                            onPress={() => alert('tevi !!')}
                        >
                            <Image
                                style={styles.logoTevi}
                                source={{ uri: Images.logoFinalWhite }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowStars}>
                        <TouchableOpacity
                            onPress={() =>
                                alert(`Puntuaste con 1 Star a ${username}`)
                            }
                        >
                            <Ionicons
                                style={styles.iconStart}
                                name="md-star"
                                color={Colors.primary.white}
                                size={50}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                alert(`Puntuaste con 2 Star a ${username}`)
                            }
                        >
                            <Ionicons
                                style={styles.iconStart}
                                name="md-star"
                                color={Colors.primary.white}
                                size={50}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                alert(`Puntuaste con 3 Star a ${username}`)
                            }
                        >
                            <Ionicons
                                style={styles.iconStart}
                                name="md-star"
                                color={Colors.primary.white}
                                size={50}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                alert(`Puntuaste con 4 Star a ${username}`)
                            }
                        >
                            <Ionicons
                                style={styles.iconStart}
                                name="md-star"
                                color={Colors.primary.white}
                                size={50}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                alert(`Puntuaste con 5 Star a ${username}`)
                            }
                        >
                            <Ionicons
                                style={styles.iconStart}
                                name="md-star"
                                color={Colors.primary.white}
                                size={50}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.rowActivity}>
                    <View style={styles.timeContainer}>
                        <Ionicons
                            name="md-play-circle"
                            color={Colors.primary.white}
                            size={14}
                        />

                        <Text style={styles.timeTitle}>7 hs</Text>
                    </View>

                    <Text style={styles.textTime}>Activo ultima semana</Text>
                </View>

                <View style={styles.rowFlatList}>
                    {data.redes && (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            columnWrapperStyle={styles.flatListContactInfo}
                            data={data.redes}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => (
                                <>
                                    {item.type === 'instagram' &&
                                        _renderInstagram(item)}

                                    {item.type === 'facebook' &&
                                        _renderFacebook(item)}

                                    {item.type === 'twitter' &&
                                        _renderTwitter(item)}
                                </>
                            )}
                        />
                    )}
                </View>

                <View style={styles.rowFollowerAndPost}>
                    <TouchableOpacity onPress={() => alert('ver lastPost')}>
                        <View style={styles.followerAndPostCol}>
                            <Text style={styles.followerAndPostTitle}>
                                Post
                            </Text>
                            <Text style={styles.followerAndPostCount}>20</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert('ver Seguidores')}>
                        <View style={styles.followerAndPostCol}>
                            <Text style={styles.followerAndPostTitle}>
                                Seguidores
                            </Text>
                            <Text style={styles.followerAndPostCount}>
                                2760
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => alert('ver Seguidos')}>
                        <View style={styles.followerAndPostCol}>
                            <Text style={styles.followerAndPostTitle}>
                                Seguidos
                            </Text>
                            <Text style={styles.followerAndPostCount}>270</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    {data.post && (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            columnWrapperStyle={styles.flatListPost}
                            data={data.post}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.postItemContainer}>
                                    <Image
                                        source={{ uri: item.picture }}
                                        style={styles.imagePost}
                                    />

                                    <View style={styles.teviPostCol}>
                                        <Ionicons
                                            name="md-eye"
                                            color={Colors.primary.white}
                                            size={20}
                                        />

                                        <Text style={styles.teviPostText}>
                                            {item.tevi}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const { height, width } = Dimensions.get('screen')
const height_picture_container = height * 0.4
const height_buttons_tevi = height * 0.07
const width_buttons_tevi = width * 0.8
const height_image_button_tevi = height * 0.05
const width_image_button_tevi = height * 0.08
const width_post = width * 0.49

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: Colors.primary.black,
    },
    coverPageRow: {
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imageProfileContainer: {
        padding: 20,
        width,
        height: height_picture_container,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imageProfile: {
        width,
        height: height_picture_container,
    },
    rowPoints: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    pointCol: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    pointsText: {
        fontFamily: 'BeVietnam-ExtraBold',
        fontSize: 16,
        color: Colors.primary.white,
        marginLeft: 4,
    },
    rowActivityActive: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: Colors.primary.pink,
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    activityText: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
        marginBottom: 3,
        fontSize: 14,
    },
    statusProfile: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 20,
        bottom: -8,
        right: 10,
    },
    statusActive: {
        backgroundColor: Colors.primary.pink,
    },
    statusConnected: {
        backgroundColor: Colors.green,
    },
    rowSayHi: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    rowFollowAndTevi: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width,
    },
    teviButton: {
        backgroundColor: Colors.primary.pink,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: height_buttons_tevi,
        width: width_buttons_tevi,
    },
    logoTevi: {
        width: width_image_button_tevi,
        height: height_image_button_tevi,
    },
    rowStars: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
    },
    iconStart: {
        marginHorizontal: 6,
    },
    rowActivity: {
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.primary.pink,
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    timeTitle: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
        fontSize: 16,
        marginLeft: 4,
        marginBottom: 4,
    },
    textTime: {
        color: Colors.primary.white,
        marginBottom: 2,
        fontFamily: 'BeVietnam-SemiBold',
        fontSize: 16,
    },
    rowFlatList: {
        marginTop: 10,
        padding: 10,
    },
    flatListContactInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    rowContactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    contactIcon: {
        marginRight: 6,
        fontSize: 16,
    },
    contactText: {
        fontFamily: 'BeVietnam-Regular',
        fontSize: 12,
        marginBottom: 2,
        color: Colors.gray.twenty,
    },
    rowFollowerAndPost: {
        flexDirection: 'row',
        width,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.primary.dark,
        paddingTop: 16,
    },
    followerAndPostCol: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    followerAndPostTitle: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-SemiBold',
        marginBottom: 2,
        fontSize: 14,
    },
    followerAndPostCount: {
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
        marginBottom: 2,
        fontSize: 18,
    },
    postContainer: {
        paddingVertical: 10,
    },
    flatListPost: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postItemContainer: {
        position: 'relative',
        margin: 2,
        width: width_post,
        height: width_post,
        padding: 10,
        backgroundColor: Colors.primary.pink,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePost: {
        width: width_post,
        height: width_post,
    },
    teviPostCol: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 6,
    },
    teviPostText: {
        fontFamily: 'BeVietnam-Bold',
        color: Colors.primary.white,
        fontSize: 14,
        marginBottom: 3,
        marginLeft: 5,
    },
})
