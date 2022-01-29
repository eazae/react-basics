import { useState } from 'react';

function App() {
  // (create-react-app이기 때문에, "React.useState()"로 할 필요없이 바로 import해서 사용가능)
  // recap) useState()는 [(value), (modifier function)] 배열을 반환함
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  // render(+re-render)가 일어나는 시점을 찍어보자
  // -> 처음에 render 1번 + state가 change될 때마다 이 모든 것이 실행되는 것을 확인해볼 수 있음
  console.log('render..');

  return (
    <>
      <h1>{counter}</h1>
      {/* create-react-app 기반이기 때문에 "on.."까지만 입력해도 이벤트가 자동완성지원 */}
      <button onClick={onClick}>click me!</button>
    </>
  );
}

export default App;
