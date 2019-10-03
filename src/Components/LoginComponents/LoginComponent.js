import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    Button,
} from '../../common';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            secureText: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.onError === 'unauthorized_user') {
            alert('Unauthorized User. Please check Username and Password');
        }
    }

    onPressLogin = () => {
        const { username, password } = this.state;
        if (username == '') {
            alert('Please enter Username');
        }
        else if (password == '') {
            alert('Please enter Password');
        }
        else {
            this.props.onPressLogin(username, password);
        }
    }

    showHidePassword = () => {
        this.setState({ secureText: !this.state.secureText })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardView}>
                    <View style={styles.inputsRow}>
                        <Icon name='user' style={[styles.blackIconStyle, { flex: 0.5, }]} />
                        <TextInput
                            style={[styles.inputStyle, {flex: 5.2}]}
                            placeholder='Username'
                            placeholderTextColor='#333333'
                            underlineColorAndroid='transparent'
                            value={this.state.username}
                            autoCapitalize='none'
                            onChangeText={(username) => this.setState({ username })}
                        />
                    </View>
                    <View style={styles.inputsRow}>
                        <Icon name='lock' style={[styles.blackIconStyle, { flex: 0.5, }]} />
                        <TextInput
                            style={[styles.inputStyle, { flex: 4.5, }]}
                            placeholder='Password'
                            placeholderTextColor='#333333'
                            underlineColorAndroid='transparent'
                            secureTextEntry={this.state.secureText}
                            value={this.state.password}
                            autoCapitalize='none'
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <View style={{ flex: 0.7 }}>
                            <TouchableOpacity onPress={() => this.showHidePassword()}>
                                {this.state.secureText === true &&
                                    <Icon name='eye-slash' style={styles.blackIconStyle} />
                                }
                                {this.state.secureText === false &&
                                    <Icon name='eye' style={styles.blackIconStyle} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button
                        onPress={() => this.onPressLogin()}
                        button_title="LOGIN"
                        buttonStyle={styles.buttonStyle}
                    />
                </View>
            </View>
        );
    }
}


export default LoginComponent;