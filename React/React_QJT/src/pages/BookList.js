import React from 'react';
import PropTypes from 'prop-types';
import { get, del } from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import { message, Table, Button, Popconfirm } from 'antd';

class BookList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      BookList: []
    }
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  componentWillMount(){
    get('http://localhost:3000/book')
      .then(res => {
        this.setState({
          BookList:res
        }) 
      })
  }

  handleEdit (book) {
    this.props.history.push('/book/edit/' + book.id);
  }

  handleDel(book){
    del('http://localhost:3000/book/' + book.id)
      .then(res => {
        this.setState({
          bookList: this.state.BookList.filter(item => item.id !== book.id)
        });
        message.success('删除图书成功');
      })
      .catch(err => {
        console.error(err);
        message.error('删除图书失败');
      });
  }

  render () {
    const {BookList} = this.state;

    const columns = [
      {
        title: '图书ID',
        dataIndex: 'id'
      },
      {
        title: '书名',
        dataIndex: 'name'
      },
      {
        title: '价格',
        dataIndex: 'price',
        render: (text, record) => <span>&yen;{record.price / 100}</span>
      },
      {
        title: '所有者ID',
        dataIndex: 'owner_id'
      },
      {
        title: '操作',
        render: (text, record) => (
          <Button.Group type="ghost">
            <Button size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
            <Popconfirm title="确定要删除吗？" onConfirm={() => this.handleDel(record)}>
              <Button size="small">删除</Button>
            </Popconfirm>
          </Button.Group>
        )
      }
    ];
    return (
        <Table columns={columns} dataSource={BookList} rowKey={row => row.id}/>
    );
  }
}

export default BookList;