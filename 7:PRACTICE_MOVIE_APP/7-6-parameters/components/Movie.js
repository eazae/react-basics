//? 'Link' 사용법
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// function Movie({ coverImg, title, summary, genres }) {
//* Step 5. "id" prop을 receive
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {/*//// <Link to="/movie">{title}</Link> */}
        {/* Dynamic URL을 위해, id 값을 URL에 넘겨줘야함
        //* Step 3. props값을 넘겨주는 부모 컴포넌트 (../routes/Home.js) 로 가보자 
        // ...
        //* Step 6. 아래와 같이 받아온 prop의 값으로 url을 정의하자. 
        //! VERY USEFUL!! */}
        <Link to={`/movie/${id}`}>{title}</Link>

        {/* (Step 7.) url의 이 동적부분(ex. ":id")에 오는 값이 무엇인지 확인하는 방법? (../components/Detail.js 로 가보자) */}
      </h2>
      {/* 7-9: movie.summary 부분의 길이 검사해서 다듬는 부분 해보자 
        "summary"는 string이므로, array의 함수들을 사용할 수 있음 -> .slice(시작, 끝); 
        (백틱으로 감싸야 함을 유의) */}
      <p>{summary.length > 230 ? `${summary.slice(0, 230)} ...더보기` : summary}</p>

      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
