import React, { Component } from 'react';

//* Step1. define a Class Component
class App extends Component {
  //! state 관리를 위해서 현재* 해야되는 것들
  //* Step2. define State
  state = {
    count: 0,
  };
  //* Step3. modifier function: sets state to a value
  modify = (n) => {
    this.setState((current) => {
      return {
        count: n,
      };
    });
  };
  render() {
    //* Step4. pass the State
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        {/* this. 키워드 잊지 말것 -> class component이기 때문에 */}
        <button onClick={() => this.modify(count + 1)}>Increment</button>
      </>
    );
  }
}
//! 이것을 어떻게 하면 더 나은 방식으로 표현할 수 있을까
//! + 이것을 어떻게 하면 function들로 표현할 수 있을까 (Class Component이라서 "this." 귀찮게 필요 :()

export default App;
