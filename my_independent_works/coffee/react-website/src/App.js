
import React from 'react';
import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Main from './pages';
import Goods from './pages/goods';
import Coffee from './pages/coffee';
import Item from './pages/item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'JSolimo Coffee Beans', price: 10.73, weight: 2, ourbest: true, country: 'Brazil', img: require('./components/images/circ1.png'), id: 1},
        {name: 'Presto Coffee Beans', price: 15.99, weight: 1, ourbest: true, country: 'Brazil', img: require('./components/images/circ2.png'), id: 2},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: true, country: 'Kenya', img: require('./components/images/circ3.png'), id: 3},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Kenya', img: require('./components/images/circ3.png'), id: 4},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Columbia', img: require('./components/images/circ3.png'), id: 5},
        {name: 'JAROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('./components/images/circ3.png'), id: 6},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Columbia', img: require('./components/images/circ3.png'), id: 7},
        {name: 'AROMISTICO Coffee', price: 6.99, weight: 1, ourbest: false, country: 'Brazil', img: require('./components/images/circ3.png'), id: 8}
      ],
      filter: 'all'

    };
  }
  filterCoffee = (items, filter) => {
    switch (filter) {
        case 'Brazil':
            return items.filter(item => item.country === 'Brazil');
        case 'Kenya':
            return items.filter(item => item.country === 'Kenya');
        case 'Columbia':
            return items.filter(item => item.country === 'Columbia');
        default:
            return items
    }    
  }
  onFilterSelect = (filter) => {
    this.setState({filter});
}
  render() {
    const {data, img, filter} = this.state;
    const newArr = data.filter(item => item.ourbest); 
    const countryCoffee = this.filterCoffee(data, filter);
return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Main newArr={newArr} img={img}/>} />
        <Route path='/goods' element={<Goods filter={filter} onFilterSelect={this.onFilterSelect} 
        countryCoffee={countryCoffee}/>} />
      {/*   <Route path='/coffee' element={<Coffee/>} />
        <Route path='/item' element={<Item/>} /> */}
    </Routes>
    </Router>
);
}
}
  
export default App;
