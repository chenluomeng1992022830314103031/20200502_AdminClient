import React, { Component } from 'react'
import logo from './images/logo.png'
import './login.less'
import { Form, Icon, Input, Button } from 'antd';
// import { SmileOutlined, UserOutlined } from '@ant-design/icons';
const Item = Form.Item

class Login extends Component {
    handleSubmit = e => {
        // 阻止事件的默认行为：阻止表单的提交
        e.preventDefault();
        // 对表单所有字段进行统一验证
        this.props.form.validateFields((err, { username, password }) => {
            if (!err) {
                //    console.log('Received values of form:',values);
                alert(`发登录的ajax请求,username=${username},password=${password}`)

            } else {
                alert('验证失败！')
            }
        })



    };
    validatePwd = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('密码必须输入')

        } else if (value.length < 4) {
            callback('密码不能小于4位')
        } else if (value.length > 12) {
            callback('密码不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成')

        } else {
            callback()
        }

    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', { //配置对象：属性名是一些特定的名称
                                initialValue: '',//初始值
                                rules: [{ required: true, message: '用户名是必须' },
                                { min: 4, message: '用户名不能小于4位' },
                                { max: 12, message: '用户名不能大于12位' },
                                { min: 4, message: '用户名不能小于4位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                                ]


                            })(<Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />)
                            }

                        </Item>
                        <Item>
                            {getFieldDecorator('password', { //配置对象：属性名是一些特定的名称
                                initialValue: '',
                                rules: [{ validator: this.validatePwd }],



                            })(<Input type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="密码"
                            />)
                            }

                        </Item>
                        {/* <Item>

                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        </Item> */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        )
    }
}
const WrapperForm = Form.create()(Login)


export default WrapperForm //<Form(Login)>
