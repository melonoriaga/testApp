import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

export default function ButtonSecondary(props: any) {
  return (
    <TouchableOpacity
      style={styles.buttonSecondaryBlock}
      {...props}
    >
      <Text style={styles.buttonSecondaryText}>
        { props.buttonText }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSecondaryBlock: {
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 15,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonSecondaryText: {
    textAlign: 'center',
    color: Colors.primary.pink,
    fontSize: 16,
    fontFamily: 'BeVietnam-Bold',
  },
});