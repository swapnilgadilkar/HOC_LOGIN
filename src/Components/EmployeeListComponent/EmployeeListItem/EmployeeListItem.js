
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    Card,
    CardSection,
} from '../../../common';
import style from './style';
const { height, width } = Dimensions.get('window');

const EmployeeListItem = ({ employeeData, onCardPress }) => {

    return (
        <Card style={style.cardStyle}>
            <CardSection >
                <View>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginBottom: 3 }}>
                        Name: {employeeData.name}
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
                        <Text style={{ color: 'gray', fontSize: 14, }}>
                            Age: {employeeData.age}
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 14, marginBottom: 3 }}>
                            Gender: {employeeData.gender}
                        </Text>
                    </View>
                    <Text style={{ color: 'gray', fontSize: 14, marginBottom: 4 }}>
                        Email: {employeeData.email}
                    </Text>
                    <Text style={{ color: 'gray', fontSize: 14, }}>
                        Phone: {employeeData.phoneNo}
                    </Text>
                </View>
            </CardSection>
        </Card>
    )
}

export default EmployeeListItem;