import React, { Component } from 'react';
//components
import Header from './headerComponent/header';
import Content from './contentComponent/content';
import Footer from './footerComponent/footer';

import { Layout } from 'antd';

class Dashboard extends Component {

    render() {

        return (
            <div className="App">
                <Layout className="layout">
                    <Header />
                    <Content />
                    <Footer />
                </Layout>
            </div>


        );
    }

}


export default Dashboard;
