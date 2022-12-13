
import './main.css';
import beanslogo1 from '../images/Beans logo-1.svg';
import Header from '../header/header';
import BeansLogoBlack from '../beanslogoblack/beanslogoblack';

const Main = () => {
    return (
   <>
    <section className="header"> 
    <Header/>      
        <h1 className="main">Everything You Love About Coffee</h1>
        <div className="beans">
            <img src={beanslogo1} alt="beans logo" className="beans-logo"/>               
        </div>
        <h2 className="main-text">
            We makes every day full of energy and taste
        </h2>
        <h2 className="main-text-two">
            Want to try our beans?
        </h2>
        <div href="#" className="more" type="button">
            <p>More</p>
        </div>
    </section>
    <main>
        <section className="about">
            <h3 className="about-us">About Us</h3>            
        </section>
            <BeansLogoBlack/>       
            <p className="about-text-p">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face. <br/><br/>                 
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
            </p>        
    </main>
   </>
    );
}

export default Main;