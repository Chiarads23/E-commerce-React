import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import styles from '../../Styles/Layout/Header.module.scss';

const Header= () => {
    return(
        <div>
            <Head />
             <Search />
            <Navbar />
           
        </div>
    )
};

export default Header;

