import * as React from 'react'

import StudentContainer from '../../components/Student/StudentContainer'

export default function StudentScreen({ navigation }: any) {
    return <StudentContainer handleNavigation={navigation} />
}
