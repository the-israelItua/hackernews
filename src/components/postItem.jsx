import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const { title, by, time, url } = this.props.post;
    return (
      <a href={url}>
        <div className="__postitem">
          <h3 className="__postitemtitle__">{title}</h3>
          <div className="__postedbottom__">
            <p className="__postedby__">Posted by {by}</p>
            <p className="__posttime__">{time}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default PostItem;
