
import './header.css'; 
import logo from '../images/Logo.svg';
 
 const Header = () => {
    return (
    <header>
         <nav className="navigate">
            <div className="menu"><img src={logo} alt="logotip"/></div> 
            <div className="menu"><a className="menu__item" href="#">Our coffee</a></div>
            <div className="menu"><a className="menu__item" href="#">For your pleasure</a></div>                 
        </nav>
       
    </header>
    );
 }

export default Header; 
 