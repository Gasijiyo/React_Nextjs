import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosing, onStopPosing}) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingPosts)=>[postData, ...existingPosts]);
  }

  return (
    <>
      {isPosing && (
        <Modal onClose={onStopPosing}>
          <NewPost onCancel={onStopPosing} onAddPost={addPostHandler}/>
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Yang Su" body="Handsome" />
      </ul>
    </>
  );
}

export default PostList;
