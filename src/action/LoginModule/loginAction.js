import constants from '../constants';

const user_credential = {
    username: "prashant@gmail.com",
     password : "prashant123"
}

export const Login = (username, password) => {
    return (dispatch) => {
        if (user_credential.username != username && user_credential.password != password){
            dispatch({
                type: constants.USER_LOGIN_FAILED,
                payload: 'unauthorized_user'
            })
        }
        else{
            
            dispatch({
                type: constants.USER_LOGIN,
                payload: 'login_success'
            })
        }
    }

}

