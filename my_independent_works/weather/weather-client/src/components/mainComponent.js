
import "./mainComponent.css";
import YandexWeather from "./sites/yandex";
import { useState, useEffect} from 'react';
import { useHttp } from './hooks/http.hook';


const MainComponent = () => {
    const [state, setState] = useState();
    const { request } = useHttp();
   
useEffect(() => {
    request('http://localhost:3001/yandex')
      .then(res => setState(res))
      // eslint-disable-next-line
}, []);



    return (
        <main>
            <YandexWeather state={state} />
        </main>
    )
}
export default MainComponent;
