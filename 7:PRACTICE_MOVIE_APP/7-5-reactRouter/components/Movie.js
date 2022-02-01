//? 'Link' 사용법
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      {/* ////<h2>{title}</h2> */}
      {/* 제목을 클릭하면 영화상세페이지로 이동하게 구현 */}
      {/* 일반 HTML 방식(<a> 태그): 문제점은, 전체 페이지가 새로고침(re-load)된다는 점 :( */}
      {/*//// <h2><a href='/movies'>{title}</a></h2>  */}
      {/*//* 'Link' 활용: (사용방법은 아래와 같다. <Link to='(이동할경로)'>) */}
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>

      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
