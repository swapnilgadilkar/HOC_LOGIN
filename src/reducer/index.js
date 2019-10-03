import loginReducer from './loginReducer';
import employeeListReducer from './employeeListReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    loginReducer,
    employeeListReducer
});