import React from 'react';
import { useStyles } from 'utils/hooks';
import './Main.css'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const styles = {
    mainContent: {
        marginTop: 80
    }
}

const Main = () => {
    const classes = useStyles(styles);
    return (
    <div className="main-container">
        <Header />
        <main> 
            <div>MAIN</div>            
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default Main
