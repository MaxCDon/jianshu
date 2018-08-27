import React, { Component } from 'react';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./style";

class Login extends Component{
    render(){
        const { login, loginStatus } = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={'账号'} innerRef={(input) => {this.accout=input}}/>
                        <Input placeholder={'密码'} innerRef={(input) => {this.password=input}}/>
                        <Button onClick={() => login(this.accout.value, this.password.value)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accout, password){
        const action = actionCreators.login(accout, password);
        dispatch(action);
    }
});

export default connect(mapState,mapDispatch)(Login);