import React, { Component } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
    Link
} from 'react-router-dom';

const { Header } = Layout;

class dashboardHeader extends Component {

    
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/Home">
                        Log-Out
                    </Link>
                </Menu.Item>
            </Menu >
        );

        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log('userData:', userData.name);
        return (
            <div className="header">
                <Header>
                    <div className="logo" >Logo</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ position: 'absolute', right: '15px' }}
                    >
                        <Menu.Item key="1"><Link to="/dashboard/feed" >News Feed</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/dashboard" >Home</Link></Menu.Item>
                        <Menu.Item key="3">
                            <Dropdown overlay={menu}>
                                <a href='#' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {userData.name}
                                     {/* data */}
                                     <DownOutlined />
                                </a>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>

            </div>
        );
    }
}

export default dashboardHeader;