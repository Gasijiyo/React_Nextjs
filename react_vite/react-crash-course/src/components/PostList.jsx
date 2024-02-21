import Post from './Post';

function PostList() {
    return (
        <ul>
            <Post author="Maximlian" body="React.js is awesome"/>
            <Post author="Manuel" body="Check out the full course"/>
            <Post author="Yang Su" body="Handsome"/>
        </ul>
    );
}

export default PostList;