import React, { Component } from 'react';


//components
import Header from './headerComponent/header';
import Footer from './footerComponent/footer';
import Content from './contentComponent/content';


//

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
             
                <Content />
                <Footer />
            </div>

        );
    }

}

export default Home;
