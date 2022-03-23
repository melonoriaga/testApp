import React, { useState } from 'react'
import { View } from 'react-native'

import AlertFloatBottom from '../../components/Atoms/Alerts/AlertFloatBottom'
import ButtonPrimary from '../../components/Atoms/Forms/ButtonPrimary'
import ButtonSecondary from '../../components/Atoms/Forms/ButtonSecondary'
import TextInputAtom from '../../components/Atoms/Forms/TextInputAtom'
import TextInputPassword from '../../components/Atoms/Forms/TextInputPassword'
import SingUpComponent from '../../components/Login/SingUpComponent'
import { AuthContext } from '../../context/'
import { db, auth } from '../../model/firebase/firebaseConfig'

export default function SinInScreen({ navigation }: any) {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstNameInputChange: false,
        emailInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
        errorLoginShown: false,
        errorLoginMessage: '',
    })

    const firstNameInputChange = (value) => {
        setFirstName(value)
        if (value.length !== 0) {
            setData({
                ...data,
                name: value,
                firstNameInputChange: true,
            })
        } else {
            setData({
                ...data,
                name: value,
                firstNameInputChange: false,
            })
        }
    }

    const emailInputChange = (value) => {
        setEmail(value)
        if (value.length !== 0) {
            setData({
                ...data,
                email: value,
                emailInputChange: true,
            })
        } else {
            setData({
                ...data,
                email: value,
                emailInputChange: false,
            })
        }
    }

    const handlePasswordChange = (pass) => {
        setPassword(pass)
        setData({
            ...data,
            password: pass,
        })
    }

    const handleConfirmPasswordChange = (pass) => {
        setConfirmPassword(pass)
        setData({
            ...data,
            confirmPassword: pass,
        })
    }

    const toggleSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    const toggleConfirmSecureEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry,
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

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((response: any) => {
                requestOn()

                const uid = response.user.uid
                const name = data.name

                response.user.updateProfile({
                    displayName: name,
                })

                const usersRef = db.collection('users')

                usersRef.doc(uid).set({
                    uid,
                    email,
                    firstName: data.name,
                })

                SingIn(response.user)
            })
            .catch((error) => {
                requestOff()
                showErrorLogin(error)
            })
    }

    return (
        <>
            <SingUpComponent>
                <TextInputAtom
                    labelTitle="Nombre"
                    placeholderVaule="Tu nombre aqui"
                    iconName="md-contact"
                    iconColor="#424874"
                    iconSize={28}
                    onChangeText={(val) => firstNameInputChange(val)}
                    textInputChange={data.firstNameInputChange}
                />

                <TextInputAtom
                    labelTitle="Email"
                    placeholderVaule="email aqui.."
                    iconName="md-at"
                    iconColor="#424874"
                    iconSize={28}
                    onChangeText={(val) => emailInputChange(val)}
                    textInputChange={data.emailInputChange}
                />

                <TextInputPassword
                    labelTitle="Password"
                    placeholderText="Tu contraseña ..."
                    iconName="ios-key"
                    iconColor="#424874"
                    iconSize={28}
                    secureTextValue={data.secureTextEntry}
                    onChangeText={(val) => handlePasswordChange(val)}
                    toggleSecureEntry={() => toggleSecureEntry()}
                />

                <TextInputPassword
                    labelTitle="Confirmar Password"
                    placeholderText="confirmar aqui..."
                    iconName="ios-key"
                    iconColor="#424874"
                    iconSize={28}
                    secureTextValue={data.confirmSecureTextEntry}
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                    toggleSecureEntry={() => toggleConfirmSecureEntry()}
                />

                <View style={{ marginVertical: 5 }}>
                    <ButtonPrimary
                        buttonText="Crear cuenta"
                        onPress={() => onRegisterPress()}
                    />

                    <ButtonSecondary
                        buttonText="Ingresar"
                        onPress={() => navigation.navigate('SingInScreen')}
                    />
                </View>
            </SingUpComponent>

            {data.errorLoginShown && (
                <AlertFloatBottom
                    closedError={() => hideErrorLogin()}
                    messageError={data.errorLoginMessage}
                />
            )}
        </>
    )
}
