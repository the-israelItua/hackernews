import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsIds } from "./actions";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import PostList from "./PostList";
import Pagination from "./Pagination";

class App extends Component {
  state = { currentPage: 1, postsPerPage: 10 };
  componentDidMount() {
    this.props.getPostsIds();
  }

  setCounter = (num) => {
    this.setState({ currentPage: num });
  };

  render() {
    const { currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const reqPostsIds =
      this.props.postsIds.length === 0
        ? []
        : this.props.postsIds[0].slice(indexOfFirstPost, indexOfLastPost);

    const footer = reqPostsIds.length === 0 ? null : <Footer />;
    console.log(reqPostsIds);
    return (
      <>
        <Header />
        <PostList reqPostsIds={reqPostsIds} />
        <Pagination
          totalPosts={this.props.postsIds.length}
          paging={this.setCounter}
        />
        {footer}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsIds: state.postsIds,
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { getPostsIds })(App);
