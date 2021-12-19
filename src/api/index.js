import axios from 'axios';

const URL_BASE = 'https://comicvine.gamespot.com/api/';
const API_KEY = '?api_key=f4656fd9ac844a572bda1f89870cec96f204cf2d';
const JSON_FORMAT = '&format=json';

const formatFilters = (filters) => {
  if (filters) {
    const filterFormmated = Object.keys(filters).reduce((acc, filter) => {
      let result = acc;
      if (result) {
        result += ',';
      }
      result += `${filter}:${filters[filter]}`;
      return result;
    }, '');
    return `&filter=${filterFormmated}`;
  }
  return '';
};

export const callByPost = (entity, filters = null, body) => axios.post(`${URL_BASE}/${entity}/${API_KEY}${JSON_FORMAT}${formatFilters(filters)}`, body);
