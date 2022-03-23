import * as React from 'react'

import FriendDetail from '../../components/Student/Details/Follow/FollowDetail'

export default function FollowDetailScreen({ navigation, route }: any) {
    return (
        <FriendDetail
            username={route.params.username}
            data={route.params.data}
            goBackList={() => navigation.navigate('Root')}
        />
    )
}
