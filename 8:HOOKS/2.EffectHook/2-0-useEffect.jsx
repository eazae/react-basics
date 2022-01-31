/* Basics of useEffect */
// useEffect의 기본 활용법 (다음에는... useEffect 더 & 활용방법들)

const { useState, useEffect } = require('react');

const App = () => {
  const sayHello = () => console.log('hello');
  // component가 mount되는 즉시 "hello"를 볼 수 있음
  useEffect(() => {
    //! useEffect는 'componentDidMount'의 역할을 해서, 새로고침을 하면, sayHello()를 실행함
    // 하지만, 'componentDidUpdate'의 역할도 하기 때문에, 버튼을 클릭(i.e. state가 update)해도 sayHello()를 실행함
    // => useEffect: 2개의 argumen를 받음.
    // * 첫번째 인자: function으로서의 'effect' (useEffect(sayHello);로 해도 실행가능)
    // * 두번째 인자: dependencies (a.k.a. 'deps') -> (deps가 있다면) effect는 이 deps리스트에 있는 값일 때만 값이 변할 때만 활성화됨 (useEffect(sayHello, [number];))
    //
    sayHello();

    // useEffect의 effect에서 function을 return한다면?
    // : 'componentWillUnmount'와 동일
    // (다음 챕터에서 component가 unmount되는 부분을 추가하면서 다뤄보겠음.)
  }, [number]); // number가 변할 때만 effect함수가 실행(activate)됨 -> 즉 aNumber가 update될 때는 실행되지 않음
  //+ 만약에 (컴포넌트가) mount될 때 딱 한번만 실행되게 하고 싶다면? []: 빈 deps 리스트 넘김
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  return (
    <>
      <div>Hi</div>
      {/* 버튼을 누르면 각각의 state가 update됨 */}
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </>
  );
};

export default App;
