/* create-react-app 프로젝트를 기반으로 한 코드. 따로 이 폴더로 빼온 것 (실행 X) */

import { useState } from 'react';

function App() {
  // (create-react-app이기 때문에, "React.useState()"로 할 필요없이 바로 import해서 사용가능)
  // recap) useState()는 [(value), (modifier function)] 배열을 반환함
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}
