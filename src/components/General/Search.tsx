import styled from 'styled-components';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { SetStateAction, useState } from 'react';
import { searchMovie } from '../../api/searchMovie';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
import { baseImageLink } from '../../link';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    const movies = await searchMovie(searchTerm as any);

    if (!movies) {
      toast.error('No movies found');
      setLoading(false);
      return;
    }

    if (movies.length === 0) {
      toast.error('No movies found');
      setLoading(false);
      return;
    }

    setLoading(false);
    setMovies(movies);
    toast.success(`Found ${movies.length} movies`);
  };

  loading && <Spinner />;
  return (
    <Wrapper>
      <Container>
        <Input
          type="text"
          placeholder="What do you want to watch?"
          onKeyUp={(e: { key: string }) => {
            setMovies([]);
            setSearchTerm('');

            if (e.key === 'Escape') {
              setMovies([]);
            }
          }}
          onKeyPress={(e: { key: string }) => {
            setMovies([]);
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            setSearchTerm(e.target.value);
          }}
        />
        <SearchIconCtn
          onClick={() => {
            handleSearch();
          }}
        >
          <SearchIcon
            style={{
              color: '#ffffff',
              width: '12px',
              height: '12px',
            }}
          />
        </SearchIconCtn>
      </Container>
      {movies.length > 0 && (
        <PreviewMovie>
          {movies.map((movie: any) => (
            <PreviewMovieInner>
              <PreviewMovieImage
                src={`${baseImageLink}/${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt="Movie"
              />
              <PreviewMovieContent>
                <PreviewMovieTitle>{movie.title}</PreviewMovieTitle>
                <PreviewMovieDescription>
                  {movie.overview}
                </PreviewMovieDescription>
              </PreviewMovieContent>
            </PreviewMovieInner>
          ))}
        </PreviewMovie>
      )}
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  height: 36px;
  gap: 10px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  background: transparent;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIconCtn = styled.div`
  position: absolute;
  right: 10px;
`;

const PreviewMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: absolute;
  width: 40%;
  top: 90px;
  background: #1f2937;
  border-radius: 6px;
  padding: 10px;
  z-index: 1;
  height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const PreviewMovieInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

const PreviewMovieImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  object-fit: cover;
`;

const PreviewMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const PreviewMovieTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  color: #ffffff;
`;

const PreviewMovieDescription = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 20px;
  color: #ffffff;
`;
