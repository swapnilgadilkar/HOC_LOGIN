
import React from 'react';
import { View, Platform } from 'react-native';

const Card = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle : {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 4,
            },
            android: {
                elevation: 5
            },
        }),
        borderRadius: 10
    },
    

}


export  {Card};
