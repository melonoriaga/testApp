import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

export default function ButtonPrimary(props: any) {
  return (
    <TouchableOpacity
      style={styles.buttonPrimaryblock}
      {...props}
    >
      <Text style={styles.buttonText}>
        { props.buttonText }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimaryblock: {
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 14,
    backgroundColor: Colors.primary.pink,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primary.white,
    fontSize: 18,
    fontFamily: 'BeVietnam-Bold',
  },
  buttonIcon: {
    marginLeft: 20,
  },
});