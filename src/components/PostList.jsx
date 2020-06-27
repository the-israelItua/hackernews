import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "./actions";
import Spinner from "./layouts/Spinner";
import PostItem from "./postItem";

class PostList extends Component {
  render() {
    const postComp =
      this.props.posts.length === 0 ? (
        <Spinner />
      ) : (
        this.props.posts.map((post) => <PostItem key={post} post={post} />)
      );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">{postComp}</div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPosts })(PostList);
