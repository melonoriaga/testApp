import React from 'react'
import { View } from 'react-native'

import AlertFloatBottom from '../../components/Atoms/Alerts/AlertFloatBottom'
import ButtonLink from '../../components/Atoms/Forms/ButtonLink'
import ButtonPrimary from '../../components/Atoms/Forms/ButtonPrimary'
import ButtonSecondary from '../../components/Atoms/Forms/ButtonSecondary'
import TextInputAtom from '../../components/Atoms/Forms/TextInputAtom'
import TextInputPassword from '../../components/Atoms/Forms/TextInputPassword'
import SinInComponent from '../../components/Login/SingInComponent'
import { AuthContext } from '../../context/'
import { db, auth } from '../../model/firebase/firebaseConfig'

export default function SinInScreen({ navigation }: any) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
        errorLoginShown: false,
        errorLoginMessage: '',
    })

    const textInputChange = (value: string) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (reg.test(value) === false) {
            setData({
                ...data,
                email: value,
                textInputChange: false,
            })
        } else {
            setData({
                ...data,
                email: value,
                textInputChange: true,
            })
        }
    }

    const HandleValidateEmail = (value: string) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (reg.test(value) === false) {
            setData({
                ...data,
                isValidEmail: false,
            })
        } else {
            setData({
                ...data,
                isValidEmail: true,
            })
        }
    }

    const HandleValidatePassword = (value: string) => {
        if (value.lenght < 4) {
            setData({
                ...data,
                isValidPassword: false,
            })
        } else {
            setData({
                ...data,
                isValidPassword: true,
            })
        }
    }

    const handlePasswordChange = (pass: string) => {
        if (pass.length < 4) {
            setData({
                ...data,
                password: pass,
                isValidPassword: false,
            })
        } else {
            setData({
                ...data,
                password: pass,
                isValidPassword: true,
            })
        }
    }

    const handleToggleSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const showErrorLogin = (messageError: any) => {
        let parseMessage = JSON.stringify(messageError)
        parseMessage = JSON.parse(parseMessage)

        const finalMessage = parseMessage.message

        setData({
            ...data,
            errorLoginShown: true,
            errorLoginMessage: finalMessage,
        })
    }

    const hideErrorLogin = () => {
        setData({
            ...data,
            errorLoginShown: false,
            errorLoginMessage: '',
        })
    }

    const { SingIn, requestOn, requestOff }: any = React.useContext(AuthContext)

    const HandleLogin = (email: string, password: string) => {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                requestOn()

                const uid = response.user.uid
                const usersRef = db.collection('users')

                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            alert('User does not exist anymore.')
                            return
                        }

                        const user = firestoreDocument.data()
                        SingIn(user)
                    })
                    .catch((error) => {
                        alert(error)
                    })
            })
            .catch((error) => {
                requestOff()

                showErrorLogin(error)
            })
    }

    return (
        <>
            <SinInComponent>
                <TextInputAtom
                    labelTitle="Email"
                    placeholderVaule="email aqui.."
                    iconName="md-at"
                    iconColor="#424874"
                    iconSize={28}
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e) =>
                        HandleValidateEmail(e.nativeEvent.text)
                    }
                    textInputChange={data.textInputChange}
                    isValidValue={data.isValidEmail}
                    messageError="Ingresar un email correcto"
                />

                <TextInputPassword
                    labelTitle="Password"
                    placeholderText="Tu contraseña ..."
                    iconName="ios-key"
                    iconColor="#424874"
                    iconSize={28}
                    secureTextValue={data.secureTextEntry}
                    messageError="Password incorrect"
                    isValidValue={data.isValidPassword}
                    onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e) =>
                        HandleValidatePassword(e.nativeEvent.text)
                    }
                    toggleSecureEntry={() => handleToggleSecureEntry()}
                />

                <ButtonLink color="white" buttonText="Olvide la contraseña" />

                <View style={{ marginVertical: 5 }}>
                    <ButtonPrimary
                        buttonText="Ingresar"
                        onPress={() => HandleLogin(data.email, data.password)}
                    />

                    <ButtonSecondary
                        buttonText="No tengo cuenta"
                        onPress={() => navigation.navigate('SingUpScreen')}
                    />
                </View>
            </SinInComponent>

            {data.errorLoginShown && (
                <AlertFloatBottom
                    closedError={() => hideErrorLogin()}
                    messageError={data.errorLoginMessage}
                />
            )}
        </>
    )
}
