const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34572373-edc875bd86747273058f50c79';

export const getPictures = (request, page) => {
    return fetch(
      `${BASE_URL}?key=${API_KEY}&q=${request}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    )
        }