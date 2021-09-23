/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

class Message extends Component {
  render(){
    var {message} = this.props;
    return (
      <div>
            <h3>
              <span className="badge amber darken-2">{message}</span>
            </h3>
      </div>
    );
  }
}

export default Message;
