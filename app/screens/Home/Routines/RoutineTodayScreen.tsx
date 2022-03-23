import React from 'react'

import ModalRoutine from '../../../components/Home/ModalRoutine/ModalRoutine'

export default function RoutineCarouselScreen({ route, navigation }: any) {
    return (
        <ModalRoutine
            params={route.params}
            goBackList={() => navigation.goBack()}
            handleNavigation={() => navigation}
        />
    )
}
