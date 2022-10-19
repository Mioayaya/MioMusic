// export const ENVIRONMENT_URL = "http://127.0.0.1:3000/";
export const ENVIRONMENT_URL = "http://182.92.7.115:3000";

import * as songList from './axios/api/songList';
import * as discoverHome from './axios/api/discoverHome';
import * as song from './axios/api/song';

const api = {
  songList,
  discoverHome,
  song,
}

export default api;
