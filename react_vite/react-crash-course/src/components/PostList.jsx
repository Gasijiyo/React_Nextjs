import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosing, onStopPosing}) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch('http://localhost:8081/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts)=>[postData, ...existingPosts]);
  }

  return (
    <>
      {isPosing && (
        <Modal onClose={onStopPosing}>
          <NewPost onCancel={onStopPosing} onAddPost={addPostHandler}/>
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
