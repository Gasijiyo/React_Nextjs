/** create-react-app 에선 js 확장자를 사용해도 되지만 
 *  vite(비트)에선 jsx만 가능
 */

import classes from './Post.module.css';
// import styles from './Post.module.css';

const names = ['Maxmilian', 'Manuel'];
/**
 * 함수의 첫 글자는 대문자 권장(recommended)
 */
function Post(props) {
    
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );        
}

export default Post;