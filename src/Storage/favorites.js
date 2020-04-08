import AsyncStorage from '@react-native-community/async-storage';

const MOVIES_KEY = 'favorite_movies';

export const fetchMovies = async () => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getItem(MOVIES_KEY)
        .then(items => {
          if (items === null) {
            resolve([]);
          } else {
            resolve(JSON.parse(items));
          }
        })
        .catch(e => {
          console.log('Error 2 while fetching favorite movies: ' + error);
          reject(error);
        });
    } catch (error) {
      console.log('Error while fetching favorite movies: ' + error);
      reject(error);
    }
  });
};

export const saveMovieToFavorites = movie => {
  return fetchMovies()
    .then(alreadySaved => {
      const filtered = alreadySaved.filter(item => item.id === movie.id);
      if (filtered.length === 0) {
        alreadySaved.push(movie);
        AsyncStorage.setItem(MOVIES_KEY, JSON.stringify(alreadySaved));
      } else {
        console.log(filtered);
      }
      return true;
    })
    .catch(e => {
      return false;
    });
};

export const removeMovieFromFavorites = movie => {
  return fetchMovies()
    .then(alreadySaved => {
      const filtered = alreadySaved.filter(item => item.id !== movie.id);
      AsyncStorage.setItem(MOVIES_KEY, JSON.stringify(filtered));
      return true;
    })
    .catch(e => {
      return false;
    });
};

export const isMovieFavorite = movie => {
  return fetchMovies()
    .then(alreadySaved => {
      const filtered = alreadySaved.filter(item => item.id === movie.id);
      if (filtered.length === 0) {
        return false;
      } else if (filtered.length === 1) {
        return true;
      } else {
        console.log(filtered);
        return true;
      }
    })
    .catch(e => {
      return false;
    });
};
