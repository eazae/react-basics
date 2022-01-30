/* Hook 2번: useTabs */
// :현재 선택한 Section(tab)의 content만 보여줌

import { useState } from 'react';

// let's see how small but useful Hooks can be!
// -> 결국 useState() 활용해서 이것저것 해보는 중

// let's say we have data from an API
const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2",
  },
];

// Hook 정의
export const useTabs = (tabIndex, allTabs) => {
  // check error (in begining of hook)
  if (!allTabs || !Array.isArray(allTabs)) {
    return; // fail silently
  }
  // useState() 활용
  const [currentIndex, setCurrentIndex] = useState(tabIndex);

  return {
    currentItem: allTabs[currentIndex], // currentItem.content해서 뽑아쓸 것임
    changeItem: setCurrentIndex, // modifier function 넘김 (-> 모든 것을 새로고침해준다는 것을 꼭 기억!!)
  };
};

/* Hook 사용 */
// const App = () => {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div className="App">
//       {/* make 2 buttons for each tab */}
//       {/* map()에 index를 넘겨준다 (ex. 0, 1) */}
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       {/* show currently selected tab */}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// };

// export default App;
