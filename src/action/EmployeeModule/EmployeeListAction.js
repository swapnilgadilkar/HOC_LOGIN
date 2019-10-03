import constants from '../constants';
import * as employee_data from '../employees.json';

export const EmployeeList = () => {
    return (dispatch) => {
        dispatch({
            type: constants.EMPLOYEE_LIST,
            payload: employee_data.user
        })
    }

}
