import * as React from 'react'

import * as firebase from '../../../app/model/firebase/firebaseConfig'
import ProfileComponentContainer from '../../components/Profile/ProfileComponentContainer'
import { AuthContext } from '../../context'

export default function ProfileScreen() {
    const { SingOut, requestOn }: any = React.useContext(AuthContext)

    const logOutApp = async () => {
        requestOn()

        await firebase.auth.signOut()

        SingOut()
    }

    return <ProfileComponentContainer logOutApp={() => logOutApp()} />
}
