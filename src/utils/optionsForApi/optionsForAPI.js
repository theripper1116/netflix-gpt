const { REACT_APP_TMDB_API_HEADER } = process.env;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: REACT_APP_TMDB_API_HEADER,
  },
};
