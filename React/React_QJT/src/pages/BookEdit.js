import React from 'react';
import PropTypes from 'prop-types';
import request, {get} from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import BookEditor from '../components/BookEditor';

class UserEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      book: null
    };
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount () {
    const bookId = this.props.match.params.id;  
    fetch('http://localhost:3000/book/' + bookId)
      .then(res => res.json())
      .then(res => {
        this.setState({
          book: res
        });
      });
  }

  render () {
    const {book} = this.state;
    return (
      <div>
        {
          book ? <BookEditor editTarget={book}/> : '加载中...'
        }
      </div>
    );
  }
}

export default UserEdit;