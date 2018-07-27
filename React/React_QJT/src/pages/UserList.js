import React from 'react';
import PropTypes from 'prop-types';
import request, {get} from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import { message, Table, Button, Popconfirm } from 'antd';

class UserList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userList: []
    }
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  componentWillMount(){
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userList:res
        }) 
      })
  }

  handleEdit (user) {
    this.props.history.push('/user/edit/' + user.id);
  }

  handleDel(user){
    fetch('http://localhost:3000/user/' + user.id)
      .then(res => {
        this.setState({
          userList: this.state.userList.filter(item => item.id !== user.id)
        });
        message.success('删除用户成功');
      })
      .catch(err => {
        console.error(err);
        message.error('删除用户失败');
    });
  }

  render () {
    const {userList} = this.state;

    const columns = [
      {
        title: '用户ID',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'name'
      },
      {
        title: '性别',
        dataIndex: 'gender'
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Button.Group type="ghost">
              <Button size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
              <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleDel(record)}>
                <Button size="small">删除</Button>
              </Popconfirm>
            </Button.Group>
          );
        }
      }
    ];

    return (
          <Table columns={columns} dataSource={userList} rowKey={row => row.id}/>
    );
  }
}

export default UserList;