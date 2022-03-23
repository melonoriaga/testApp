import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Colors from '../../constants/Colors'
import alumnos from '../../model/alumnos'
import HistoryItem from './History/HistoryItem'
import StudentFollowItem from './Items/StudentFollowItem'
import StudentPartnerItem from './Items/StudentPartnerItem'
import StudentAvatar from './StudentAvatar'
import StudentHeader from './StudentHeader'
import StudentsSwitch from './StudentsSwitch'

export default function StudentContainer({ handleNavigation }: any) {
    const [data, setData] = React.useState({
        showPartnerList: true,
        showFollowList: false,
    })

    const pressShowPartnerList = () => {
        setData({
            ...data,
            showPartnerList: true,
            showFollowList: false,
        })
    }

    const pressShowFollowList = () => {
        setData({
            ...data,
            showPartnerList: false,
            showFollowList: true,
        })
    }

    const handlePressStudentDetail = (props: any) => {
        handleNavigation.navigate('PartnerDetailScreen', {
            username: props.username,
            data: props,
        })
    }

    const handlePressFollowDetail = (props: any) => {
        handleNavigation.navigate('FriendDetailScreen', {
            username: props.username,
            data: props,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                style="inverted"
                backgroundColor={Colors.primary.black}
            />

            <StudentHeader>
                {data.showPartnerList && (
                    <TouchableOpacity
                        style={styles.buttonHeader}
                        onPress={() => []}
                    >
                        <MaterialCommunityIcons
                            name="wechat"
                            color={Colors.gray.five}
                            size={28}
                        />
                    </TouchableOpacity>
                )}
            </StudentHeader>

            <StudentsSwitch
                showPartnerList={() => {
                    pressShowPartnerList()
                }}
                showFriendList={() => {
                    pressShowFollowList()
                }}
                activeButtonPartner={data}
            />

            {data.showPartnerList && (
                <HistoryItem
                    alumnos={alumnos}
                    handleNavigation={handleNavigation}
                />
            )}

            {data.showFollowList && (
                <HistoryItem
                    alumnos={alumnos}
                    handleNavigation={handleNavigation}
                />
            )}

            {data.showPartnerList && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item: any) => item.id}
                    data={alumnos}
                    renderItem={({ item }) => (
                        <StudentPartnerItem items={item}>
                            <TouchableOpacity
                                onPress={() => handlePressStudentDetail(item)}
                            >
                                <StudentAvatar
                                    picture={item.picture}
                                    username={item.username}
                                    gimansio={item.gimansio}
                                    status={item.estado}
                                />
                            </TouchableOpacity>
                        </StudentPartnerItem>
                    )}
                />
            )}

            {data.showFollowList && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item: any) => item.id}
                    data={alumnos}
                    renderItem={({ item }) => (
                        <StudentFollowItem items={item}>
                            <TouchableOpacity
                                onPress={() => handlePressFollowDetail(item)}
                            >
                                <StudentAvatar
                                    picture={item.picture}
                                    username={item.username}
                                    gimansio={item.gimansio}
                                    status={item.estado}
                                />
                            </TouchableOpacity>
                        </StudentFollowItem>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
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
        paddingLeft: 30,
    },
})
