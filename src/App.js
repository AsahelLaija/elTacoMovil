import React from 'react';
//import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';

/*
            <Chef />

            <Laurels />
 */

function App () {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />

            <Intro />

            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App;
