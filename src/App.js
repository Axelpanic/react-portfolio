import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/header';
import Footer from './components/Footer';
import Style from './assets/style/style.css';


//App building
function App() {
    return (
         <div className="all"> 
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}

export default App;
