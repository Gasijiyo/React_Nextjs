import { useState } from "react";

import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

/**
 * import되는 컴포넌트는 기본 HTML태그와의 구분 때문에 대문자로 시작해야한다.
 */
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList 
          isPosing={modalIsVisible} 
          onStopPosing={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
