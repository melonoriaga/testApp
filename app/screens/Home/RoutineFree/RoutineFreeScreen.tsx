import React from 'react'

import RoutineFreeComponent from '../../../components/Home/RoutineFree/RoutineFreeComponent'

export default function RoutineFreeScreen({ navigation }: any) {
    return <RoutineFreeComponent goBackList={() => navigation.goBack()} />
}
