import Post from './Post';
import classes from './PostList.module.css'
import NewPost from './NewPost';

function PostList() {
    return (
        <>
            <NewPost/>
            <ul className={classes.posts}>
                <Post author="Maximlian" body="React.js is awesome"/>
                <Post author="Manuel" body="Check out the full course"/>
                <Post author="Yang Su" body="Handsome"/>
            </ul>
        </>
    );
}

export default PostList;