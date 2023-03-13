import {  ChatOutlined, ShareOutlined, ThumbUpAltOutlined,SendOutlined } from "@mui/icons-material";
import React from "react";
import Gravatar from "react-gravatar";
import InputOption from "../InputOption/InputOption";

import "./Posts.css";

function Posts({ name, description, message, photoUrl, avatarAddress }) {
  return (
    <div className="posts">
      <div className="post_header">
        <Gravatar className="Posts_avatar" email={avatarAddress}></Gravatar>
        <div className="post_info">
          <h2> {name} </h2>
          <p> {description} </p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_button">
        <InputOption title="Like" color="gray" Icon={ThumbUpAltOutlined} />
        <InputOption title="Comment" color="gray" Icon={ChatOutlined} />
        <InputOption title="Share" color="gray" Icon={ShareOutlined} />
        <InputOption title="Send" color="gray" Icon={SendOutlined} />
      </div>
    </div>
  );
}

export default Posts;
