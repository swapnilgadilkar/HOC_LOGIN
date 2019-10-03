import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EmployeeList from '../../Components/EmployeeListComponent/EmployeeListComponent';

import * as EmployeeListActionCall from '../../action/EmployeeModule/EmployeeListAction';

class EmployeeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList : []
        };
    }

    componentDidMount() {
        //Action Call
        this.props.employeeListActionprops.EmployeeList();
    }

    //Receive Data from reducer
    componentWillReceiveProps(nextProps) {
        this.setState({employeeList: nextProps.employeeData})
    }

    render() {
        return (
            <EmployeeList employeeList={this.state.employeeList}>
            </EmployeeList>
        );
    }
}

const mapStateToProps = (state) => ({
    employeeData: state.employeeListReducer
});

const mapDispatchToProps = (dispatch) => ({
    employeeListActionprops: bindActionCreators(EmployeeListActionCall, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
