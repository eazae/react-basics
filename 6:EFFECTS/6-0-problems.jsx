/* create-react-app 프로젝트를 기반으로 한 코드. 따로 이 폴더로 빼온 것 (실행 X) */

import { useState } from 'react';

/* Effects가 필요한 이유 (문제점 소개) */
function App() {
  // (create-react-app이기 때문에, "React.useState()"로 할 필요없이 바로 import해서 사용가능)
  // recap) useState()는 [(value), (modifier function)] 배열을 반환함
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  // render(+re-render)가 일어나는 시점을 찍어보자
  // -> 처음에 render 1번 + state가 change될 때마다 이 모든 것이 실행되는 것을 확인해볼 수 있음
  console.log('render..');
  //? BUT component가 처음 render될 때만 코드가 실행이되게 하려면?
  // (ex. API를 통해 데이터를 가져올 때 - 첫 component render에서 API를 호출하고, 그 이후 state가 변화되어도 API를 다시 호출하지 않음)
  //! 특정 코드가, 첫번째 render에만 실행되고, 다른 state변화에는 실행되지 않도록 함
  //

  return (
    <>
      <h1>{counter}</h1>
      {/* create-react-app 기반이기 때문에 "on.."까지만 입력해도 이벤트가 자동완성지원 */}
      <button onClick={onClick}>click me!</button>
    </>
  );
}

export default App;
