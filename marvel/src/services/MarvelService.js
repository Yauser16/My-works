
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=c19c02a89897935339b64dccf69d666a'
    getResource = async (url) => {
        let res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Could not farch ${url}, status: ${res.status}`);
        }
        
        return res.json();
        };
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        };   
        getCharacter = (id) => {
            return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
            };
}
 
 export default MarvelService;