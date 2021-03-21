export class DataServices {
  findMovieBytitle(title) {
    const url = `https://www.omdbapi.com/?s=${title}&apikey=ae761988`;
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log('Error! :D', err));
  }
}
