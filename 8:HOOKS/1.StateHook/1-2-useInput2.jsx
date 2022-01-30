/* Hook 1번: useInput */
// :updates an input + validation

// 1-1-useInput1 에 validation부분을 useInput hook에 추가
import { useState } from 'react';

// validator: 유효성 검사해주는 function
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    // before setting value,
    let willUpdate = true;
    // check if validator is a function
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    // validation에 걸리면, state에 value로 반영되지 않을 것
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

/* Hook 사용 */
// const App = () => {
//   // validator 함수를 하나 선언하자
//   const maxLen = (value) => value.length <= 10;
//   // 위의 함수를 hook에 넘겨줌
//   const name = useInput('Mr.', maxLen);
//   // (추가)
//   const noAtSign = (value) => !value.includes('@');
//   // const name = useInput("Mr.", noAtSign);

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

// export default App;
