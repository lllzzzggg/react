import React from 'react';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider'
import HomeLayout from '../layouts/HomeLayout';
import BookEditor from '../components/BookEditor';

class BookAdd extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        
        const {form: {name, price, owner_id}, formValid} = this.props;

        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }

        fetch('http://localhost:3000/book', {
            method: 'post',
            // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
            body: JSON.stringify({
                name: name.value,
                price: price.value,
                owner_id: owner_id.value
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
                alert('添加图书成功');
                this.props.history.push('/book/list');
                this.setState({
                    name: '',
                    price: 0,
                    owner_id: ''
                });
            } else {
                alert('添加失败');
            }
        })
        .catch((err) => console.error(err));
    }
    render () {
      const {form: {name, price, owner_id}, formValid} = this.props;
        return (
            <BookEditor/>
        );
    }
}

BookAdd = formProvider({
  name: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return value.length > 0;
        },
        error: '请输入书名'
      },
      {
        pattern: /^.{1,20}$/,
        error: '书名最多20个字符'
      }
    ]
  },
  price: {
    defaultValue: 0,
    rules: [
      {
        pattern: function (value) {
          return value > 0
        },
        error: '请输入正确的价格'
      }
    ]
  },
  owner_id: {
    defaultValue: '',
    rules: [
      {
        pattern: function (value) {
          return !!value;
        },
        error: '请选择拥有者'
      }
    ]
  }
})(BookAdd);

export default BookAdd;