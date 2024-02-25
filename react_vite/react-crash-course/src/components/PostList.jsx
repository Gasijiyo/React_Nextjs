import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
        <Modal>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Manuel" body="Check out the full course" />
            <Post author="Yang Su" body="Handsome" />
        </ul>
    </>
  );
}

export default PostList;
