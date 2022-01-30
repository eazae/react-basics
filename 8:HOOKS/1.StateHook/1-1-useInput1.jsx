/* Hook 1번: useInput */
// :updates an input

// 해당 hook을 class로 만들었을 때와, hooks로 만들었을 때를 비교해볼 것임
import { useState } from 'react';

//? 만든 hook에는 'export' 추가하는 것 잊지 말자
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  //! ** 다른 function **에서 event를 처리할 수 있다! (react에 있어서 혁명!)
  // 즉 component 안에서가 아닌, 다른 분리된 file, 다른 entity에 연결해서 event를 처리할 수 있다!
  const onChange = (event) => {
    console.log(event.target);
  };
  // 어떠한 변화를 주기 전에, 기본값(initialValue)을 value와 함께 return하고 싶다
  //// return { value };
  // 여기에 event-listener도 함께 반환해보자.
  return { value, onChange };
};

/* Hook 사용 */
// const App = () => {
//   // Hook 사용
//   const name = useInput('Mr.');
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* <input placeholder="Name" value={name.value} /> */}
//       {/*//* OR shortcut) 다음과 같이 "...(obj.)"하면, 그 안에 있는 모든 것을 unpacking해서 보여줌. 즉 name은 name.value와 똑같아짐
//       //? "{...name}" == "value={name.value} onChange={name.onChange}"
//           이건 너무 길으므로 shortcut 사용 */}
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// };

// export default App;
