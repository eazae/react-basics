import { useState } from 'react';

/* Simple TO-DO list 예제 (part2) */
//! render several '** same ** components" from an array
const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    setTodo('');
    setTodoList((currentArray) => [todo, ...currentArray]);
  };
  console.log(todoList);

  // 아래 map()부분을 콘솔에 찍어보자. => 'react element'를 원소로 담고 있는 array
  console.log(todoList.map((todoItem, index) => <li key={index}>{todoItem}</li>));
  return (
    <>
      <h1>My To-Do List ({todoList.length} 개)</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write your to-do..." />
        <button>+ Add ToDo</button>
      </form>
      <hr />
      {/* 배열에 있는 것들을 출력: (vanillaJS의) .map()사용
       //! => map(): array 각각의 element들을 바꾸고 싶을 때 (element들을 다 바꾸고 싶고, 다 바뀐 새로운 array를 가지고 싶을 떄)
        map()은 이 안에 함수를 넣을 수 있도록 해줌. -> 이 함수는 array의 모든 item에 대해서 실행될 것임!!
        이 함수에서 무엇을 return하던지 간에, 그 return한 값은 새로운 array에 들어가게 됨!
        ex. ['hello!', 'how', 'are', 'you', 'are ', 'there'].map(()=> ":)")
          > [':)', ':)', ':)', ':)', ':)', ':)'] 
          
        첫번째 argument: 현재의 item을 가져올 수 있음
        ex. ['hello!', 'how', 'are', 'you', 'are ', 'there'].map((item)=> item.toUpperCase()); 
          > ['HELLO!', 'HOW', 'ARE', 'YOU', 'ARE ', 'THERE'] */}

      {/* map()을 활용해서 같은 component를 반환 */}
      <ul>
        {/*//// {todoList.map((todoItem) => ( */}
        {todoList.map((todoItem, index) => (
          //// <li>{todoItem}</li>
          /* BUT... warning: "Warning: Each child in a list should have a unique "key" prop."
            같은 component의 list를 render할 때, React가 list에 있는 모든 item들을 identify(인식)해야되기 때문에, key라는 prop을 넣어줘야됨
            (이때, key는 unique해야됨)
            -> map()의 두번째 argument로 주어지는 ‘index’를 key(prop)로 활용하자 (고유한 값이어야 하므로 적당) */
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
