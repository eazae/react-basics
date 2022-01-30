import React, { useState } from 'react';

/* Intro to useState */
//? Hooks 를 사용하여 state값 변경
export default function App() {
  //! useState(): 배열에 2개의 value를 반환 (state, modifier func.) + param으로는 initialState
  // 이름은 자유 (convention: modifier 함수의 경우 set+="(state명)"으로 하는 것이 일반적)
  const [item, setItem] = useState(1);
  // 이렇게 해도 위와 동일, 하지만 이렇게 쓰는 경우는 없지
  //// const item2 = useState(1)[0];
  //// const setItem2 = useState(1)[1];

  // Hook의 장점 중의 하나 -> incourages 'functional programming'
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      {/* useState를 부른 곳에 값을 return 해줄 수 있음 */}
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

//? [비교] (이전 방식) without Hooks (Class Component)
/* Hooks가 생기기 전에, state를 functional component에 사용할 수 없었음
 (state를 사용하고 싶으면, Class Component 형태로 만들어야 했었음)
 class component의 귀찮음: 'this' 키워드와 같은 rule들과, 'render'와 같은 method 등을 사용해야 됨
 하지만 함수형 컴포넌트에서는 이런 것들 다 신경쓰지 않아도 됨! :) */
class AppUgly extends React.Component {
  state = {
    iem: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* this 키워드를 사용해서 호출 필요 */}
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
}
