interface NumProps {
  num: number;
  fetchMovie: () => void;
}

interface CardProps {
  src: string;
  title: string;
  imdb: number;
  tomato: number;
  genre: string;
  country: string;
}

interface ChangeMovieProps {
  fetchMovie: () => void;
}

export type { NumProps, CardProps, ChangeMovieProps };
