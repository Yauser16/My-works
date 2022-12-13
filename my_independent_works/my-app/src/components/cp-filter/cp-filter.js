import { Fragment } from 'react';
import './cp-filter.css';
import OurCoffee from '../our-coffee/our-coffee';

const CpFilter = (props) => {
    
    return (
<Fragment className='fragmrnt'>
        <section className="filter__menu">
            <div className="sortir">
                <p className="look">Looking for</p>
                <div type="button"> 
                <p className="here">start typing here..</p>    
                </div>
            </div>        
            <div className="filter">
                <p className="look">Or filter</p>
                <div className="sort" type="button"> 
                <p>Brazil</p>    
                </div>
                <div className="sort" type="button"> 
                <p>Kenya</p>    
                </div>
                <div className="sort" type="button"> 
                <p>Columbia</p>    
                </div>
            </div>
        </section> 
        <OurCoffee data={props.data}/>
</Fragment>  
    )
};

export default CpFilter;