//? 별도의 분리된 Component로 render할 것을 떼어냄

// import 'prop-types'
import PropTypes from 'prop-types';

//* Step1. "App.js"에서 코드를 잘라내어 가져옴
//* Step3. props로 필요한 정보들을 넘겨받아옴 (from 'parent component'(ex. "App" component))
function Movie({ coverImg, title, summary, genres }) {
  return (
    //* Step2. key가 필요하지 않으므로 지워주고 + "movie"가 정의되어있지 않으므로 다 지워줌
    // "coverImg(medium_cover_image)", "title", "summary" 등의 정보는, App.js(부모 컴포넌트)로부터 받을 예정인 정보들
    // -> 'props' 활용! (line4)
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>

      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
//* Step4. 부모 컴포넌트로 돌아가서, "Movie" 컴포넌트를 import 받아서 render하자
// (App.js 코드)

//* Step5. props의 type check 하는 부분을 추가하자
/* Movie component의 PropTypes를 설정 */
// (import 'prop-types')
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // (string의 array, 필수)
};

export default Movie;
