import {createReducer} from '../util';
import constants from '../action/constants';
const initialState = {

};


export default createReducer(initialState,{
  [constants.USER_LOGIN]:(state,payload)=>{
    return (state, payload);
  },
  [constants.USER_LOGIN_FAILED]:(state,payload)=>{
    return (state, payload);
  }
});
