
import './yandex.css';

import sun from '../../img/sun.svg'
import yw from '../../img/yw.png';
import useWeatherServices from '../services/weatherServices';

const YandexWeather = (props) => {
    const { state } = props;
    const { weatherImg } = useWeatherServices();
    console.log(state);

    // const content = () => {
    //     for (let key of state[0]) {
    //         console.log(key)
    //     }}
    //     content();
    return (
        <div className="wrapper">
            <div className="today">
               
                <div className="details">
                <h3>Яндекс Погода</h3>
                <img src={yw} alt='yw'></img>
                    <div>
                        <div className="day">Сегодня</div>
                        <div className="date">{state[1].today.date}</div>
                    </div>
                    <div>
                        <div className="temperatureDay">День: {state[1].today.day}°</div>
                        <div className="temperatureNight">Ночь: {state[1].today.night}°</div>
                    </div>
                    <div>
                        <div className="fallout">{state[1].today.fallout}</div>
                    </div>
                    <img className="icon" src={weatherImg(state[1].today.fallout)} alt='rain'></img>
                </div>

            </div>
            <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day">Завтра</div>
                       <div className="date">{state[1].next1.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next1.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next1.night}°</div>
                   </div>
                   <div>
                       <div className="fallout"> {state[1].next1.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next1.fallout)} alt='rain'></img>
               </div>

           </div>
           <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day">Послезавтра</div>
                       <div className="date">{state[1].next2.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next2.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next2.night}°</div>
                   </div>
                   <div>
                       <div className="fallout">{state[1].next2.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next2.fallout)} alt='rain'></img>
               </div>

           </div>
           <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day"></div>
                       <div className="date">{state[1].next3.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next3.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next3.night}°</div>
                   </div>
                   <div>
                       <div className="fallout">{state[1].next3.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next3.fallout)} alt='rain'></img>
               </div>

           </div>
           <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day"></div>
                       <div className="date">{state[1].next4.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next4.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next4.night}°</div>
                   </div>
                   <div>
                       <div className="fallout">{state[1].next4.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next4.fallout)} alt='rain'></img>
               </div>

           </div>
           <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day"></div>
                       <div className="date">{state[1].next5.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next5.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next5.night}°</div>
                   </div>
                   <div>
                       <div className="fallout">{state[1].next5.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next5.fallout)} alt='rain'></img>
               </div>

           </div>
           <div className="nextDay">
               
               <div className="nextDetails">
               
                   <div>
                       <div className="day"></div>
                       <div className="date">{state[1].next6.date}</div>
                   </div>
                   <div>
                       <div className="temperatureDay">День: {state[1].next6.day}°</div>
                       <div className="temperatureNight">Ночь: {state[1].next6.night}°</div>
                   </div>
                   <div>
                       <div className="fallout">{state[1].next6.fallout}</div>
                   </div>
                   <img className="icon" src={weatherImg(state[1].next6.fallout)} alt='rain'></img>
               </div>

           </div>
        </div>
    )
   
      
}
export default YandexWeather;
