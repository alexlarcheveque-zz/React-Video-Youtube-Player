import React from "react";
import faker from "faker";

const Comment = props => {
  return (
    <div className="ui minimal comments">
      <div className="comment">
        <a className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a className="author">
            {faker.name.firstName()} {faker.name.lastName()}
          </a>
          <div className="text"> {props.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
