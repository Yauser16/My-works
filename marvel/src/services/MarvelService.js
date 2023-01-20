
class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=c19c02a89897935339b64dccf69d666a';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`Could not farch ${url}, status: ${res.status}`);
        }
        
        return res.json();
        }
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);        
        }  
    getCharacter = async(id) => {
            const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
            return this._transformCharacter(res.data.results[0]);
            };
    _transformCharacter =  (char) => { 
            return  {
                id: char.id,
                description: char.description ? `${char.description.slice(0, 217)}...` : 'the character description is not provided',
                name: char.name, 
                thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,                                  
                homepage: char.urls[0].url,                
                wiki: char.urls[1].url,
                comics: char.comics.items
            } 
        }  
    } 
 
 export default MarvelService;