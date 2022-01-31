/* Hook 4번: useClick */
// : 'reference'의 개념을 공부해볼 수 있는 예제

const { useState, useEffect, useRef } = require('react');

/* Hook 사용 */
const App = () => {
  //! reference란? the way that we can select a part of out component
  // == document.getElementById() 와 동등
  const potato = useRef();
  setTimeout(() => console.log(potato.current), 5000);
  return (
    <>
      <div>Hi</div>
      {/* react의 모든 component는 'reference element(reference prop)'를 가지고 있음 
          즉 아래의 <input>은, 위의 "potato"와 같아지는 것임 */}
      <input ref={potato} placeholder="make this focused in 5 secs" />
    </>
  );
};

export default App;
