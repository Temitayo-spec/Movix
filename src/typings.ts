interface NumProps {
  num: number;
  fetchMovie: () => void;
}

interface CardProps {
  src: string;
  title: string;
  imdb?: number;
  tomato?: number;
  genre?: string;
  country?: string;
}

interface ChangeMovieProps {
  fetchMovie: () => void;
}

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

interface FetchProps {
  fetchUrl: string;
}

export type { NumProps, CardProps, ChangeMovieProps, RowProps, FetchProps };
