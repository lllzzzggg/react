import React from 'react';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider'
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserAdd extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        
        const {form: {name, age, gender}, formValid} = this.props;

        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }

        fetch('http://localhost:3000/user', {
            method: 'post',
            // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                gender: gender.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            })
        .then((res) => res.json())
        .then((res) => {
            // 当添加成功时，返回的json对象中应包含一个有效的id字段
            // 所以可以使用res.id来判断添加是否成功
            if (res.id) {
                alert('添加用户成功');
                this.props.history.push('/user/list');
                this.setState({
                    name: '',
                    age: 0,
                    gender: ''
                });
            } else {
                alert('添加失败');
            }
        })
        .catch((err) => console.error(err));
    }
    render () {
        const {form: {name, age, gender}, onFormChange} = this.props;
        return (
                <UserEditor/>
        );
    }
}

UserAdd = formProvider({
    name: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length > 0;
          },
          error: '请输入用户名'
        },
        {
          pattern: /^.{1,4}$/,
          error: '用户名最多4个字符'
        }
      ]
    },
    age: {
      defaultValue: 0,
      rules: [
        {
          pattern: function (value) {
            return value >= 1 && value <= 100;
          },
          error: '请输入1~100的年龄'
        }
      ]
    },
    gender: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return !!value;
          },
          error: '请选择性别'
        }
      ]
    }
  })(UserAdd);

export default UserAdd;