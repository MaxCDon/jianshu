import axios from 'axios';
import { constants } from './index';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
});

export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + accout + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登陆失败')
            }
        })
    }
};