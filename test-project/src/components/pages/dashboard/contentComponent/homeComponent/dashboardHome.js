import React, { Component } from 'react';
import { Breadcrumb } from 'antd';


class DashboardHome extends Component {
    render() {
        return (
            <div className="wrap">

                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Post Text</Breadcrumb.Item>
                    <Breadcrumb.Item>Post Videos</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>


            </div>

        );
    }

}

export default DashboardHome;
