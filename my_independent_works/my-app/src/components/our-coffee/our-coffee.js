
import './our-coffee.css';

const OurCoffee = (props) => {
    const {data} = props;
    const wrapper = data.map(item => {
        return ( 
            <div className="stock">
                <img src={item.img} alt="our coffee" className="coffeeshop" />
                <p className="cofee">{item.name} {item.weight + "kg"}</p>
                <p className="cofeeshop">{item.country}</p>
                <p className="cofeeprice">{item.price + "$"}</p>
            </div>            
                )})      
    return (
        <div className="wr">
            <div className="our-best">                      
            {wrapper}            
            </div>
        </div>
    );
}   

export default OurCoffee;