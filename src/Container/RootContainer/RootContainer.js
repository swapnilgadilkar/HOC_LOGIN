import React, { Component } from 'react';
import {
    Router,
    Scene,
} from 'react-native-router-flux';
import { YellowBox } from 'react-native';

import LoginContainer from '../LoginContainer/LoginContainer';
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class RootContainer extends Component {

    render() {
        //Initial component is Login every launch
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="LoginContainer"
                        hideNavBar={true}
                        initial 
                        component={LoginContainer}
                        title="LoginContainer"
                    />
                    <Scene
                        key="EmployeeContainer"
                        hideNavBar={true}
                        component={EmployeeContainer}
                        title="EmployeeContainer"
                    />
                </Scene>
            </Router>
        )
    }

}

export default RootContainer;