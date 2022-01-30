// useState(): how we "hook" into the React State
import React, { Component, useState } from 'react';

//* Step1. define a Class Component
//! 함수형 프로그래밍으로 변환
// react Hook으로는 간단하게 가능함
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default App;
