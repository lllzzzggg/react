import React from 'react';
import PropTypes from 'prop-types';
import request, {get} from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillMount () {
    const userId = this.props.match.params.id;  
    fetch('http://localhost:3000/user/' + userId)
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: res
        });
      });
  }

  render () {
    const {user} = this.state;
    return (
      <div>
        {
          user ? <UserEditor editTarget={user}/> : '加载中...'
        }
      </div>
    );
  }
}

export default UserEdit;