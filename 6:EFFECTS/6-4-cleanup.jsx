/* create-react-app 프로젝트를 기반으로 한 코드. 따로 이 폴더로 빼온 것 (실행 X) */

/*//! Cleanup function: 특정 Component가 destroy될 때 실핻되는 함수 */
// (자주 쓰이지는 않지만, 알아는 두자)
/* 버튼을 누를 떄마다 Component하나를 보여주거나 숨기는 예제 */
import { useState, useEffect } from 'react';

// (recap: component는, 단지 JSX를 return하는 function에 불과! 그 이상 그 이하도 아니다)
function Hello() {
  // component가 처음 create(생성)될 때(첫 render때) 한번만 실행될 함수를 구현해두자
  useEffect(() => {
    console.log('CREATED :D');

    //? ReactJS는, compoent가 destroy(!= hide)될 때 코드를 실행할 수 있도록 지원
    //! => Cleanup function!
    //* [방식] return a ** function **, from the function 'useEffect()'.
    return () => console.log('DESTROYED :(');
  }, []);
  return <h1>Hello</h1>;
}
// ----------------------- 코딩 style ---------------------------
//// 위의 것을 다른 방식으로 구현 (그냥 따로 함수로 빼낸 것이 전부)
//// function Hello2() {
////   function whenDestroyed() {
////     console.log('component destroyed');
////   }
////   function whenCreated() {
////     console.log('component created');
////     return whenDestroyed;
////   }
//
////   useEffect(whenCreated, []);
////   return <h1>Hello</h1>;
//// }

// 위의 주석처리한 방식을 -> react.js 프로젝트에서 자주 보게 될 구조로 변환해보자
//* 보통 위처럼 function으로 따로 빼지 않고, useEffect() 안에 다 작성하는 것이 일반적
// 이 때 여기에서 또 2가지 방식이 있음(i. arrow functions VS ii. 일반 function())
function Hello2() {
  // (2가지 방식 완전 동일, i.의 방식을 추천)
  // i. annonymous arrow function
  // 짧고 간결하다 (추천)
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye'); // return a function
  });
  // ii. 일반 function (비추천)
  //// useEffect(function () {
  ////   console.log('hi');
  ////   return function () {
  ////     console.log('bye');
  ////   };
  //// });
  return <h1>Hello</h1>;
}
// ------------------------------------------------------

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <>
      {/* null -> Component를 destroy(화면에서 지워버리는 것)이기 때문에, 다시 show를 했을 때, useEffect() 부분이 다시 실행! */}
      {/* 즉 create : destroy (hide가 아님!) */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </>
  );
}

export default App;
