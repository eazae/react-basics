// useState(): how we "hook" into the React State
import React, { useState } from 'react';

//! using 'Hooks' - 함수형 프로그래밍으로 변환
// react Hook으로는 간단하게 가능함
// class Component에서는 일일이 해줘야됐던 과정들이 이렇게 드라마틱하게 단축됨
const App = () => {
  //* Step1. useState(): state와, modifier 함수를 한번에 선언가능
  // useState()는 배열을 반환
  // useState()라는 hook은, React의 state management의 밑으로 들어가 hook을 당기는 것임
  const [count, setCount] = useState(0);
  // 이렇게 state를 일일이 선언하는 것이 귀찮을 수도 있지만, 그건 뭐 초기값 설정하는 부분에 state를 그룹해서 reducer를 만들 수도 있겠다 (알아서 imagination 동원)
  const [email, setEmail] = useState('');
  const updateEmail = (e) => {
    // (get value from this event("e"))
    const {
      target: { value },
    } = e;
    // 여기에서 활용가능
    setEmail(value);
  };
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  );
};

export default App;
