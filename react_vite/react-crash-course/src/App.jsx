import Post from "./components/Post";

/**
 * import되는 컴포넌트는 기본 HTML태그와의 구분 때문에 대문자로 시작해야한다.
 */
function App() {
  return (
    <>
      <Post/>
      <Post/>
      <Post/>
    </>
  );
    
}

export default App;
