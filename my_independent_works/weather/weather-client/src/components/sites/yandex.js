

import useWeatherServices from '../services/weatherServices';
import './yandex.css';

const YandexWeather = (props) => {
    const { state } = props;
    const { weatherImg, weatherSites, today, weekDay } = useWeatherServices();
    console.log(state);

    const content = (obj) => {
        const entries = Object.entries(obj);
        console.log(weekDay(1));
        return entries.map(i => {
            return i[1].map(item => {
                const degree = i[0] === 'yandex' || i[0] === 'gismeteo'  ? "°" : null;
                if (item.today.date === today()) {
                return (
                    <div className="wrapper" key={item.id}>
                        <div className="today">
    
                            <div className="details">
                                {/* <h3>{item[0]}</h3> */}
                                <img src={weatherSites(i[0])} alt={i[0]}></img>
                                <div>
                                    <div className="day">Сегодня</div>
                                    <div className="date">{item.today.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.today.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.today.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.today.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.today.fallout)} alt={item.today.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">Завтра</div>
                                    <div className="date">{item.next1.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next1.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next1.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout"> {item.next1.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next1.fallout)} alt={item.next1.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">{weekDay(2)}</div>
                                    <div className="date">{item.next2.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next2.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next2.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.next2.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next2.fallout)} alt={item.next2.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">{weekDay(3)}</div>
                                    <div className="date">{item.next3.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next3.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next3.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.next3.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next3.fallout)} alt={item.next3.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">{weekDay(4)}</div>
                                    <div className="date">{item.next4.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next4.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next4.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.next4.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next4.fallout)} alt={item.next4.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">{weekDay(5)}</div>
                                    <div className="date">{item.next5.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next5.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next5.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.next5.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next5.fallout)} alt={item.next5.fallout}></img>
                            </div>
    
                        </div>
                        <div className="nextDay">
    
                            <div className="nextDetails">
    
                                <div>
                                    <div className="day">{weekDay(6)}</div>
                                    <div className="date">{item.next6.date}</div>
                                </div>
                                <div>
                                    <div className="temperatureDay">День: {item.next6.day}{degree}</div>
                                    <div className="temperatureNight">Ночь: {item.next6.night}{degree}</div>
                                </div>
                                <div>
                                    <div className="fallout">{item.next6.fallout}</div>
                                </div>
                                <img className="icon" src={weatherImg(item.next6.fallout)} alt={item.next6.fallout}></img>
                            </div>
    
                        </div>
                    </div>
                )
            }
        return null;
    })
            
        })
    }

    
    if (state.yandex.length === 0) {
        return "Данных пока нет"
    }

    return content(state);
        
}
export default YandexWeather;
