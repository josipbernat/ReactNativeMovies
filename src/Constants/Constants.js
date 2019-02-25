export const IMAGE_POSTER_PATH = (image, favorites = false) => {
  if (favorites) {
    return 'https://image.tmdb.org/t/p/w300/' + image;
  } else {
    return 'https://image.tmdb.org/t/p/w154/' + image;
  }
};

export const IMAGE_BACKDROP_PATH = image => {
  return 'https://image.tmdb.org/t/p/w780/' + image;
};

export const IMAGE_PROFILE_PATH = image => {
  return 'https://image.tmdb.org/t/p/w185/' + image;
};

export const API_PATH = path => {
  return (
    'https://api.themoviedb.org/3/' +
    path +
    '?api_key=fea6a69ff7391818240b67fa3bb83786'
  );
};

export const IMAGE_TRAILER_PATH = image => {
  return 'https://i1.ytimg.com/vi/' + image + '/mqdefault.jpg';
};
