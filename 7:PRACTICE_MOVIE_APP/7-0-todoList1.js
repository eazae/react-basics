import { useState } from 'react';

/* Simple TO-DO list 예제 (part 1) */
const App = () => {
  const [todo, setTodo] = useState('');
  // create state for 'list of todos'
  const [todoList, setTodoList] = useState([]); // default val.: 빈 배열([])
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // prevent submit if empty
    if (todo === '') {
      return;
    }
    // empty the input after 'submit'
    setTodo('');
    // 'push' the input into "todoList"
    // (BUT, state를 직접 modify할 수는 X (ex. todoList.push(~~); -- (X)))
    //// exState = '~~'; (error: "state is a constant")
    // instead, use 'modifier functions'

    //? HOW: add an element to an array without modifing the array directly(i.e. using ".push()")
    // recap) modifier func.에 i) 직접값을 입력 / ii) 함수를 넘김 -> 2가지 방식이 있었음을 기억하자
    //! => ii) 사용: current state를 인자로 받아 -> ** 새로운 ** state를 반환한다! ("새로운" state이어야 한다는 것 강조!)
    /* ex. (VanillaJS) 특정 array의 element들로 새로운 array를 만들고 싶다면? => `...` 사용
        const food = [1, 2, 3, 4]; (여기에 '999' 추가)
    *   [999, ...food]  // [999, 1, 2, 3, 4]
        [999, food]     // [999, Array(4)] (즉 array안에 array가 들어가게 되어버림 :( )
        ([`...`]: ...food는 food배열의 element들을 'spread'해서 돌려줌) */
    setTodoList((currentArray) => [todo, ...currentArray]);

    //? me) 왜 바로 반영은 안되는걸까
    /* (https://stackoverflow.com/questions/36085726/why-is-setstate-in-reactjs-async-instead-of-sync)
    (... 생략 ...) - 강의(#7.0) 댓글에 답변있음 */
    //// console.log(todoList);
  };
  // (새로운 값이 잘 들어갔는지 확인해보자)
  //// console.log(todoList);
  return (
    <>
      {/* 리액트 -> 제목에 immediate interation들을 추가해볼 수 있음 */}
      <h1>My To-Do List ({todoList.length} 개)</h1>
      {/* create a <form> */}
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write your to-do..." />
        {/* trigger <form>'s submit event when clicked
            (Vanilla JS recap: <form> 안에 버튼이 하나라면, submit 이벤트가 발생되는 것이 default behavior) 
            -> 따라서 이것을 prevent를 먼저 해줘야 된다 (우리가 원하는 함수 실행을 하도록 하기 위해서) => <form>에 'onSubmit'이벤트 재정의 */}
        <button>+ Add ToDo</button>
      </form>
    </>
  );
};

export default App;
