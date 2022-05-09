import React from "react";
import classes from "./MyPost.module.css";
import Post from "./post/Post";
import PostForm from "./PostForm/PostForm";

function MyPosts() {
  return (
    <div className={classes.myPosts}>
      <div className={classes.content__post}>
        <h2 className={classes["content__post--heading"]}>My Posts</h2>
      </div>
      <PostForm/>
      <div className={classes.content__myPosts}>
        <Post message="HI how are you?" />
        <Post message="My first post" />
        <Post message="My name is Niyozbek" />
        <Post message="......." />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
