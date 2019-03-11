import React, { Component } from 'react';
import {
    Row,Col,Form, Icon, Input, Button, Checkbox,message
} from 'antd';

import { BrowserRouter as Router, Route, Link ,Redirect,withRouter } from "react-router-dom";

import Qs from 'qs';

import axios from 'axios';

import {post} from '../config/api';

import {getToken} from "../utils/TokenUtil";


class NormalLoginForm extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            loginSuccess:false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const  _this = this;
        this.props.form.validateFields((err, values) => {
            post('/user/user/login',
                {
                    email: values.email,
                    password: values.password
                })
                .then(function (response) {
                    console.log(response)
                    if(response.code === 0){
                        message.info('登陆成功');

                        window.localStorage.setItem("tag_token",response.data.tag_token);
                        _this.setState({
                            loginSuccess:true
                        })
                    }else {
                        message.error(response.msg);
                    }
                })
        });
    }



    componentDidMount() {
        let token = getToken();
        if(token != null && token != '' && token != undefined) {
            post('/user/user/token_login')
                .then((response) =>{
                    if(response.code === 0){
                        message.info('登陆成功');

                        this.setState({
                            loginSuccess:true
                        })
                    }
                })
        }
    }



    render() {
        const { getFieldDecorator } = this.props.form;

        //登陆成功跳转
        if(this.state.loginSuccess){
            return <Redirect push to="/mainContent" />;
        }

        return (
                <Row type="flex" justify="center" align="middle" style={{paddingTop:'10%'}}>
                    <Col xs={20} sm={20} md={12} lg={12} xl={8} style={{boxSizing:'border-box'}}>
                        <div>
                            <div className='logo' >
                                <img src={require('../../assests/images/tag.png')}/>
                                <div className='logo-text'>
                                    <h2>TagNotes&reg;</h2>
                                </div>
                            </div>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [
                                                { required: true, message: '请输入邮箱！' },
                                                {pattern:'^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$',message:'请出入正确的邮箱地址！'}
                                            ],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱" />
                                )}
                            </Form.Item>

                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                                { required: true, message: '请输入密码！' },
                                                {min:6,message:'密码长度位大于6位！'},
                                                {max:20,message:'密码长度位小于20位！'}
                                            ],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit"  block>
                                    登陆
                                </Button>
                            </Form.Item>
                            <Button type="danger" block>注册</Button>
                        </Form>
                    </Col>
                </Row>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export  default WrappedNormalLoginForm;