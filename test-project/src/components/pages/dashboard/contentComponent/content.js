import React, { Component } from 'react';
import { Layout } from 'antd';

//components
import Home from './homeComponent/dashboardHome';
import DashboardFeed from './feedComponent/feed';
import {
    Route,
    Switch
} from 'react-router-dom';

const { Content } = Layout;

class dashboardContent extends Component {

    render() {

        return (
            <div className="header">
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Switch>
                        <Route exact path='/dashboard' component={Home} />
                        <Route path='/dashboard/feed' component={DashboardFeed} />
                    </Switch>
                </Content>

            </div>
        );
    }
}

export default dashboardContent;