import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    FlatList
} from 'react-native';
import {
    Header
} from '../../common';
import styles from './style';
import EmployeeListItem from './EmployeeListItem/EmployeeListItem';

class EmployeeListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList: ['','',]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({employeeList: nextProps.employeeList});
        // alert(JSON.stringify(nextProps))
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem(item, index) {
        return (
            <EmployeeListItem  employeeData={item}/>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Header header_title="Employees" />
                    <FlatList
                        data={this.state.employeeList}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item, index }) => this._renderItem(item, index)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}


export default EmployeeListComponent;