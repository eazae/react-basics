//+ PropTypes 설치 (> npm i prop-types)
import PropTypes from 'prop-types';
// CSS option3. CSS modules
import styles from './Button.module.css';

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// 컴포넌트 생성: 'text'라는 prop을 받아와서 rendering하는.
function Button({ text }) {
  return (
    <button
      /* CSS option 2. */
      // style={{
      //   // 단점: CSS의 힘을 잃었음
      //   backgroundColor: 'tomato',
      //   color: 'white',
      // }}
      /* CSS option 3. */
      className={styles.btn}
    >
      {text}
    </button>
  );
}

// 이 컴포넌트는 App.js에서 import해서 사용
export default Button;
