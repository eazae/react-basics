import { useEffect, useState } from 'react';

/* Coin Tracker 예제 */
//: simply list the crypto-currencies & its price
//? useEffect 활용연습
// (앱 페이지를 처음 들어왔을 때 "loading..."메세지 -> 데이터가 도착하면 로딩 메세지를 hide하고, 리스트를 show함)
const App = () => {
  // state 2개: loading용 / data list용
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);

  // 다음의 API에서 데이터를 가져옴 (https://api.coinpaprika.com/v1/tickers)
  // 데이터가 도착하면,
  // run this function immediately after the component is rendered for the first time
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) // 이 response로부터 json을 추출
      .then((json) => {
        // .then() 한번 더 해서, state에 반영 + loading 해제
        setCoinList(json);
        setLoading(false);
      });
  }, []); // not watching anything (빈 array) -> 한번만 실행
  return (
    <>
      {/* JS: {}안에 `${}`처럼 사용하는 것에 주목! */}
      <h1>The Coins! {loading ? '' : `(코인개수: ${coinList.length})`}</h1>
      {/*//// {loading ? <strong>Loading...</strong> : null} */}
      {/* loading일 때 코인component가 보이지 않게 null의 위치 대신에 이렇게 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        // {/* recap(7-1)) map()을 활용해서 "coinList"의 항목들을 각각의 component에 출력 */}
        <ul>
          {/* map()에서 index를 따로 안 받아와도 되는 이유: API 응답으로 오는 데이터에서 "id"가 있더라, 그거를 key로 활용 */}
          {coinList.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
      <hr />
      {/* CHALLENGE: 코인을 선택해서, USD로 변환 */}
      <select>
        {/* map()에서 index를 따로 안 받아와도 되는 이유: API 응답으로 오는 데이터에서 "id"가 있더라, 그거를 key로 활용 */}
        {coinList.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </>
  );
};

export default App;
