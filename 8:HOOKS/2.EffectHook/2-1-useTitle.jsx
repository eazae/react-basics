/* Hook 3번: useTitle */
// : 문서의 제목을 update시켜주는 것을 담당하는 hook
// (보통은 react 'helmet'이라는 것을 사용 -> 이것을 functional hooks의 방식으로 만들어보자)

const { useState, useEffect } = require('react');

// Hook 정의
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    // <title> 태그를 가져옴 (브라우저의 탭에 있는 텍스트임)
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title; // state의 값으로 update
  };
  // useEffect 활용: component가 mount될 때 + "title" state가 update될 때, updateTitle()을 호출
  //? 즉 componentDidMount & componentWillUpdate 에 해당하는 것을 활용해봤음
  useEffect(updateTitle, [title]);

  // return "setTitle": 제목을 업데이트할 수 있도록
  return setTitle;
};

/* Hook 사용 */
// const App = () => {
//   //* hook 사용
//   const titleUpdater = useTitle('Loading...'); // modifier function("setTitle()")을 반환받음
//   // 5초 뒤에 hook을 부름 (탭이 5초 뒤에 "Loading..." --> "Home"으로 바뀌는 것을 확인)
//   setTimeout(() => titleUpdater('Home', 5000));
//   return (
//     <>
//       <div>Hi</div>
//     </>
//   );
// };

// export default App;
