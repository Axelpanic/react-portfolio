import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/header';
import Footer from './components/footer';


//App building
function App() {
    return (
         <div> 
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}

export default App;
