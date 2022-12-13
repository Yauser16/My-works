
import{ Component } from 'react';
import './app-cp.css';
import Footer from '../footer/footer';
import BeansLogoBlack from '../beanslogoblack/beanslogoblack';
import HeaderCp from '../header-cp/header-cp';
import MainCp from '../main-cp/main-cp';
import CpFilter from '../cp-filter/cp-filter';



class AppCp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'JSolimo Coffee Beans', price: 10.73, weight: 2, ourbest: true, country: 'Kenya', img: require('../images/circ1.png'), id: 1},
                {name: 'Presto Coffee Beans', price: 15.99, weight: 1, ourbest: true, country: 'Columbia', img: require('../images/circ2.png'), id: 2},
                {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: true, country: 'Columbia', img: require('../images/circ3.png'), id: 3},
                {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 4},
                {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Kenya', img: require('../images/circ3.png'), id: 5},
                {name: 'JAROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 6},
                {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 7},
                {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Columbia', img: require('../images/circ3.png'), id: 8}
              ],
            filter: 'all'
        };
    }
    filterCoffee = (items, filter) => {
        switch (filter) {
            case 'Brazilia':
                return items.filter(item => item.country === 'Brazilia');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items
        }
    }
    render() {
        const {data, filter} = this.state;
        const countryCoffee = this.filterCoffee(data, filter);
        return (
            
            <div className="App-cp">
                <HeaderCp/> 
                <MainCp/> 
                <CpFilter data={countryCoffee}/>                
                <Footer/> 
                <BeansLogoBlack/>  
            </div>

        )
    }
}
export default AppCp;