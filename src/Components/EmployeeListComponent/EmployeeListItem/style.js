import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    cardStyle:{ 
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 7,
    },
    SafeAreaStyle: {
        flex: 1, 
        backgroundColor: '#000'
    }
});
