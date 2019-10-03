import {createReducer} from '../util';
import constants from '../action/constants';
const initialState = {

};


export default createReducer(initialState,{
  [constants.EMPLOYEE_LIST]:(state,payload)=>{
    return (state, payload);
  },
  
});
