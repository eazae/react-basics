// 컴포넌트 사용
import Button from './Button';
// option 3.
import styles from './App.module.css';

/* create-react-app의 장점: 컴포넌트들이나 style들을 독립적이게 유지시켜줌 */

/* create-react-app은 React 동작방식은 동일함!
! <DIFFERENCE>
  * 설치하는 방법의 차이
  * Divide & Conquer: 파일을 여러개로 나눌 수 있다 (코드가 깔끔해짐)
  * '특정' 컴포넌트를 위한 CSS 파일을 만들 수 있음 (2가지 방식)
    - option 1. Global CSS Style 정의:: 한 개의 CSS 파일 생성 (ex. styles.css) - 일반적인 css
                사용할 곳의 파일(ex. index.js)로 가서 css파일을 import해서 사용
                (단점:: 모든 곳에 해당 스타일이 반영되어 버림 + css 파일이 엄청나게 길어짐)
    - option 2. prop 사용 -> 'style' prop
                스타일을 적용할 컴포넌트(<Button/>)에 style prop을 주어서 정의 
                해당 태그(ex. Button.js의 <button>)의 'style' 속성에 가져다 씀
                (단점:: style 속성에 값을 *직접적*으로 넣기 때문에 CSS의 힘을 잃었음)
    -> CSS를 import하고 싶지만, 그 CSS 파일이 모든 파일들에 적용(import)되는 것을 바라지는 않음. 
      HOW?: 
    - option 3. CSS modules: create-react-app의 "divde & conquer"특징 활용
    ?  => "CSS modules": (ex. Button.module.css)
           (index.js에서 import X -> 대신, 스타일을 적용시킬 곳(ex. Button.js)에만 import)
           [장점] *독립적*인 형태: React가 랜덤(각기 다른)한 class명을 부여해줌. => 내내 다른 클래스 이름들을 사용하기 위해 고민(기억)할 필요가 없음.
                ex. 클래스의 이름 동일한 것이 Button.module.css에도, App.module.css에도 있다 하더라도, 리액트가 랜덤한 다른 클래스이름을 부여해주기 때문에 겹치지 않음
  * (개발환경도 훨씬 낫다. ex. 사용하지 않은 컴포넌트의 warning / 컴포넌트에 마우스를 올렸을 때 필요한 props 조회가능 / 자동완성 기능 etc.) */

// (필요없는 코드들은 지움)
//? 현재 NodeJs를 사용하고 있기 때문에, js 파일들을 각각 분리시키는 것이 가능한 것임
//? -> 파일 당 하나의 Component를 가지는 것을 원칙으로 하자! (clean code)
function App() {
  return (
    <>
      <h1 className={styles.title}>create-react-app</h1>
      {/* Render our component */}
      <Button text={'Props'} />
    </>
  );
}

export default App;
