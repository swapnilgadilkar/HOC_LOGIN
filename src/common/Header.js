import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const Header = ({header_title }) => {
    return (
        <View style={[styles.viewStyle]}>
            <Text style={styles.titleStyle}>
                {header_title}
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#fff',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleStyle: {
        color: '#23abc4',
        fontWeight: 'bold',
        fontSize: 18,
      }
}

export { Header };