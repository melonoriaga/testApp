import * as React from 'react'

import PartnerDetail from '../../components/Student/Details/Partner/PartnerDetail'

export default function PartnerDetailScreen({ navigation, route }: any) {
    return (
        <PartnerDetail
            username={route.params.username}
            data={route.params.data}
            goBackList={() => navigation.navigate('Root')}
        />
    )
}
