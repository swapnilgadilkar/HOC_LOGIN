import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({button_title, onPress, buttonStyle}) => {
    return (
        <TouchableOpacity style={[styles.buttonStyle, buttonStyle]} onPress={onPress}>
            <Text style={styles.buttonTextStyle}>
                {button_title}
              </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: '#acacac',
        margin: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
      },
      buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      }
}

export { Button };