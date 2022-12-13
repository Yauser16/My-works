
import './footer.css';
import logo1 from '../images/Logo-1.svg';

const Footer = () => {
    return (
        <nav className="footer">
    <div className="menu__black"><a href="/goods"><img src={logo1} alt="logo"/></a></div> 
        <div className="menu__black"><a className="menu__item__black" href="/coffee">Our coffee</a></div>
        <div className="menu__black"><a className="menu__item__black" href="/item">For your pleasure</a></div>                 
    </nav>    
    );
}
export default Footer;