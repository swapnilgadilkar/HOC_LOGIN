import {
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    SafeAreaStyle: {
        flex: 1, 
        backgroundColor: '#000'
    }
});
