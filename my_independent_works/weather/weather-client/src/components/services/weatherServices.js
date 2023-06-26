
import sun from '../../img/sun.png';
import rain from '../../img/rain.svg';
import party from '../../img/cloudy-sun.png';
import cloudy from '../../img/cloudly1.png';
import storm from '../../img/rain-storm.png';
import smallRainSun from '../../img/small-rain-sun.png';
import cloudyRain from '../../img/cloudy-rain.png';
import yandex from '../../img/yw.png';
import pogodaMail from '../../img/pogodaMail.png';
import gidromet from '../../img/rosGidroMet.png';
import worldWeather from '../../img/worldWeather.png';
import gismeteo from '../../img/gisMeteo.png';
import defImg from "../../img/default.jpg";

const useWeatherServices = () => {

    const weatherImg = (item) => {

        switch (item) {
            case "Дождь":
                return rain;

            case "Малооблачно":
                return sun;

            case "Малооблачно, без осадков":
                return sun;

            case "Облачно с прояснениями":
                return party;

            case "Облачно, без осадков":
                return cloudy;

            case "Небольшой дождь":
                return cloudyRain;

            case "Ясно":
                return sun;

            case "облачно":
                return cloudy;

            case "Облачно":
                return cloudy;

            case "облачно, небольшой дождь":
                return cloudyRain;

            case "Преимущественно облачно":
                return cloudy;

            case "Дождь с грозой":
                return storm;

            case "Пасмурно, без осадков":
                return cloudy;

            case "переменная облачность, небольшой дождь":
                return smallRainSun;

            case "Пасмурно,  дождь":
                return cloudyRain;

            case "Пасмурно, небольшой  дождь":
                return cloudyRain;

            default:
                return party;
        }

    }
    const weatherSites = (item) => {

        switch (item) {
            case "yandex":
                return yandex;

            case "pogodaMail":
                return pogodaMail;

            case "gidromet":
                return gidromet;

            case "worldWeather":
                return worldWeather;

            case "gismeteo":
                return gismeteo;

            default:
                return defImg;
        }

    }

    const today = () => {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
        let day = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
        let todayNow = `${day}.${month}.${year}`;
        return todayNow;
    }

    const weekDay = (qty) => {
        const today = new Date();
        today.setDate(today.getDate() + qty);
        const weekDayNumber = today.getDay();
        const weekDay = (item) => {

            switch (item) {
                case 1:
                    return "Понедельник";

                case 2:
                    return "Вторник";

                case 3:
                    return "Среда";

                case 4:
                    return "Четверг";

                case 5:
                    return "Пятница";

                case 6:
                    return "Суббота";

                case 0:
                    return "Воскресенье";

                default:
                    return "Ничего";
            }
        }

        return weekDay(weekDayNumber);
    }



    return { weatherImg, weatherSites, today, weekDay };
}
export default useWeatherServices;