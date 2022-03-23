import * as React from 'react'

import PartnerHistoryModal from '../../components/Student/History/HistoryModal'

export default function HistoryScreen({ navigation, route }: any) {
    return (
        <PartnerHistoryModal
            data={route.params.data}
            goBackList={() => navigation.navigate('Root')}
        />
    )
}
