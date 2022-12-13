
import '../components/app-cp/app-cp.css';
import Footer from '../components/footer/footer';
import BeansLogoBlack from '../components/beanslogoblack/beanslogoblack';
import HeaderCp from '../components/header-cp/header-cp';
import MainCp from '../components/main-cp/main-cp';
import CpFilter from '../components/cp-filter/cp-filter';



const AppCp = (props) => {
    return (            
        <div className="App-cp">
            <HeaderCp/> 
            <MainCp/> 
            <CpFilter data={props.countryCoffee} filter={props.filter} 
            onFilterSelect={props.onFilterSelect}/>                
            <Footer/> 
            <BeansLogoBlack/>  
        </div>

        )
    }

export default AppCp;