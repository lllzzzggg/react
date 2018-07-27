import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import FormItem from '../components/FormItem';
import { post } from '../utils/request';
import formProvider from '../utils/formProvider';

class Login extends React.Component {
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    if (!formValid) {
      alert('请输入账号或密码');
      return;
    }

    post('http://localhost:3000/login', {
      account: account.value,
      password: password.value
    })
      .then((res) => {
        if (res) {
          this.context.router.push('/');
        } else {
          alert('登录失败，账号或密码错误');
        }
      })
  }

  render () {
    return (
      <HomeLayout title="请登录">
        <form onSubmit={this.handleSubmit}>
            用户名：<input type="text" value={account.value} onChange={e => onFormChange('account', e.target.value)}/>
            密码：<input type="password" value={password.value} onChange={e => onFormChange('password', e.target.value)}/>
          <br/>
          <input type="submit" value="登录"/>
        </form>
      </HomeLayout>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Login = formProvider({
  account: {
    defaultValue: '',
    rules: [
      {
        pattern (value) {
          return value.length > 0;
        },
        error: '请输入账号'
      }
    ]
  },
  password: {
    defaultValue: '',
    rules: [
      {
        pattern (value) {
          return value.length > 0;
        },
        error: '请输入密码'
      }
    ]
  }
})(Login);

export default Login;