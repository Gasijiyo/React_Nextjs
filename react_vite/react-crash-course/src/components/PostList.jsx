import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosing, onStopPosing}) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(()=>{
    async function fetchPosts() {
      const response = await fetch('http://localhost:8081/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8081/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log("body"+JSON.stringify(postData));
    setPosts((existingPosts)=>[postData, ...existingPosts]);
  }

  return (
    <>
      {isPosing && (
        <Modal onClose={onStopPosing}>
          <NewPost onCancel={onStopPosing} onAddPost={addPostHandler}/>
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && 
        <div style={{textAlign: 'center', color: 'white'}}>
          <p>Loading Posts...</p>
        </div>
      }
    </>
  );
}

export default PostList;
