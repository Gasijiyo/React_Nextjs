/** create-react-app 에선 js 확장자를 사용해도 되지만 
 *  vite(비트)에선 jsx만 가능
 */

const names = ['Maxmilian', 'Manuel'];
/**
 * 함수의 첫 글자는 대문자 권장(recommended)
 */
function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];


    return (
        <div>
            <p>{chosenName}</p>
            <p>React.js is awesome!</p>
        </div>
    );        
}

export default Post;