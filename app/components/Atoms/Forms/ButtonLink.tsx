import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import Colors from '../../../constants/Colors'

export default function ButtonLink(props: any) {
    return (
        <TouchableOpacity style={styles.buttonLink} {...props}>
            <Text
                style={[
                    styles.buttonLinkText,
                    {
                        color: props.color,
                    },
                ]}
            >
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonLink: {
        padding: 5,
    },
    buttonLinkText: {
        textAlign: 'right',
        color: Colors.primary.white,
        fontFamily: 'BeVietnam-Bold',
        textDecorationLine: 'underline',
    },
})
