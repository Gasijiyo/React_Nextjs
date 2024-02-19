import Post from "./components/Post";

/**
 * import되는 컴포넌트는 기본 HTML태그와의 구분 때문에 대문자로 시작해야한다.
 */
function App() {
  return (
    <>
      <Post author="Maximlian" body="React.js is awesome"/>
      <Post author="Manuel" body="Check out the full course"/>
      <Post author="Yang Su" body="Handsome"/>
    </>
  );
    
}

export default App;
