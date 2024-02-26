import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

/**
 * prop이 함수를 값으로 받는 경우 prop 앞에 on을 붙이는게 일반적. 
 */
function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
