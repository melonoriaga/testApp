import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default function ButtonWhite(props: any) {
  return (
    <TouchableOpacity
      style={styles.buttonLink}
      {...props}
    >
      <Text style={styles.buttonLinkText}>
        { props.buttonText }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLink: {
    padding: 12,
    backgroundColor: Colors.primary.white,
    width: '80%',
    borderRadius: 8,
    marginVertical: 10,

  },
  buttonLinkText: {
    textAlign: 'center',
    color: Colors.primary.pink,
    fontFamily: 'BeVietnam-Bold',
    fontSize: 18
  },
});