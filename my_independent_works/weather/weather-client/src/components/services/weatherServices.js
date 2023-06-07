
import sun from '../../img/sun.svg';
import rain from '../../img/rain.svg';
import party from '../../img/partly-cloudy.svg';
import cloudy from '../../img/clouds.svg';


const useWeatherServices = () => {

    const weatherImg = (item) => {

        switch (item) {
            case "Дождь":
                return rain;
                
            case "Малооблачно":
                return sun;
                
            case "Облачно с прояснениями":
                return party;
                
            case "Небольшой дождь":
                return cloudy;
                
            default:
                return party;
        }

    }

    return { weatherImg };
}
export default useWeatherServices;