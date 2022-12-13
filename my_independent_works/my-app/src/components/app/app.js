
import{ Component } from 'react';
import './app.css';
import Main from '../main/main';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import BeansLogoBlack from '../beanslogoblack/beanslogoblack';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'JSolimo Coffee Beans', price: 10.73, weight: 2, ourbest: true, country: 'Brazil', img: require('../images/circ1.png'), id: 1},
        {name: 'Presto Coffee Beans', price: 15.99, weight: 1, ourbest: true, country: 'Brazil', img: require('../images/circ2.png'), id: 2},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: true, country: 'Brazil', img: require('../images/circ3.png'), id: 3},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 4},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 5},
        {name: 'JAROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 6},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 7},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('../images/circ3.png'), id: 8}
      ]
    };
  }
 


  render() {
    const {data, img} = this.state;
    const newArr = data.filter(item => item.ourbest);
          return (
      <div className="App">
        <Main/>
        <OurBest newArr={newArr} img={img}/>
        <Footer/>
        <BeansLogoBlack/>
      </div>
    );
  }  
}

export default App;
