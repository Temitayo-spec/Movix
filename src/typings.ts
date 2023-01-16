interface NumProps {
  num: number;
  fetchMovie: () => void;
}

interface CardProps {
  src: string;
  title: string;
  imdb?: number;
  tomato?: number;
  genre?: Array<number>;
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

interface CarouselProps {
  children: React.ReactNode;
}

interface CustomArrowProps {
  next: () => void;
  previous: () => void;
}

export type {
  NumProps,
  CardProps,
  ChangeMovieProps,
  RowProps,
  FetchProps,
  CarouselProps,
  CustomArrowProps,
};
