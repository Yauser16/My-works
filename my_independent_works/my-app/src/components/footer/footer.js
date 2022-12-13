
import './footer.css';
import logo1 from '../images/Logo-1.svg';

const Footer = () => {
    return (
        <nav className="footer">
        <div className="menu__black"><img src={logo1} alt="logo"/></div> 
        <div className="menu__black"><a className="menu__item__black" href="#">Our coffee</a></div>
        <div className="menu__black"><a className="menu__item__black" href="#">For your pleasure</a></div>                 
    </nav>    
    );
}
export default Footer;