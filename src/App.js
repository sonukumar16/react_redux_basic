import React, { Component } from 'react';
import PostList from './containers/PostList';
import CreatePost from './containers/CreatePost';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;