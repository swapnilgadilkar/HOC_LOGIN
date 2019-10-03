
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}


const styles = {
    containerStyle : {
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        borderRadius: 7,
    },
}

export  {CardSection};
