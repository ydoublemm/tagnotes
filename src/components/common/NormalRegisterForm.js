import React, { Component } from 'react';
import {
    Row,Col,Form, Icon, Input, Button, Checkbox,message
} from 'antd';




class NormalRegisterForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        message.error('用户名或密码错误！');
    }



    render() {
        const { getFieldDecorator } = this.props.form;
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
                            {getFieldDecorator('邮箱', {
                                rules: [
                                    { required: true, message: '请输入邮箱！' },
                                    {pattern:'^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$',message:'请出入正确的邮箱地址！'}
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱" />
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('密码', {
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

const NormalRegisterForm = Form.create({ name: 'normal_login' })(NormalRegisterForm);

export  default NormalRegisterForm;