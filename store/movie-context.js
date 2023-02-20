import { createContext, useReducer } from "react";

export const MovieContext = createContext({
  movies: [],
  addMovie: ({title, about, poster}) => {},
  setMovie: (movies) => {},
  deleteMovie: (id) => {}
});

function movieReducer(state, action){
  switch(action.type){
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      return inverted = action.payload.reverse();
    case 'DELETE':
      return state.filter((movies) => movies.id != action.payload);
    default:
      return state;
  }
};

function MovieContextProvider({children}){
  const [movieState, dispatch] = useReducer(movieReducer, []);
  
  function addMovie(movieData){
    dispatch({type: 'ADD', payload: movieData})
  };

  function setMovie(id){
    dispatch({type: 'SET', payload: id})
  };

  function deleteMovie(id){
    dispatch({type: 'DELETE', payload: id})
  };

  const value = {
    movies: movieState,
    addMovie: addMovie,
    setMovie: setMovie,
    deleteMovie: deleteMovie
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
};

export default MovieContextProvider;