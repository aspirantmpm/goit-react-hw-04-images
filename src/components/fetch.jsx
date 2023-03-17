export default function fetchImages(query, page = 1) {
  const url = 'https://pixabay.com/api/';
  const key = '32959525-8b9ed50037adb2599dd065ad6';
  const filter = `image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  return fetch(`${url}?key=${key}&q=${query}&${filter}`).then(response =>
    response.json()
  );
}
