
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_KEY,
  },
};