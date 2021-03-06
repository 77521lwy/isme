import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { Menu } from 'antd';
import { LineChartOutlined, ContainerOutlined, MailOutlined,FilterOutlined,RiseOutlined,UserOutlined,QrcodeOutlined,BarChartOutlined } from '@ant-design/icons';

import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import no3_1_1 from './no3_1_1'
import no3_1_2 from './no3_1_2'
import no3_1_3 from './no3_1_3'
import no3_1_4 from './no3_1_4'
import no3_1_5 from './no3_1_5'

import no3_2_1 from './no3_2_1'
import no3_2_2 from './no3_2_2'
import no3_2_3 from './no3_2_3'

import no3_3_1 from './no3_3_1'
import no3_3_2 from './no3_3_2'
import no3_3_3 from './no3_3_3'
import no3_3_4 from './no3_3_4'

import no3_4_1 from './no3_4_1'
import no3_4_2 from './no3_4_2'
import no3_4_3 from './no3_4_3'
import no3_4_4 from './no3_4_4'

import no3_5_1 from './no3_5_1'
import no3_5_2 from './no3_5_2'

import no3_6_1 from './no3_6_1'
import no3_6_2 from './no3_6_2'
import no3_6_3 from './no3_6_3'
import no3_6_4 from './no3_6_4'
import no3_6_5 from './no3_6_5'
import no3_6_6 from './no3_6_6'
import no3_6_7 from './no3_6_7'
import no3_6_8 from './no3_6_8'

import no3_7_1 from './no3_7_1'
import no3_7_2 from './no3_7_2'
import './no3.css'
import No3_8_1 from './no3_8_1';

const { SubMenu } = Menu;

function No3() {
    let [state, setState] = useState({
        collapsed: false,
    })

    let toggleCollapsed = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4', 'sub5', 'sub6','sub7', 'sub8'];
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    function onOpenChange (keys){
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="no3_box clearfix" >
            <div style={{ width: 170 }} className="no3_box_nav">
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={state.collapsed} openKeys={openKeys} onOpenChange={onOpenChange}>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="??????????????????">
                        <Menu.Item key="1"><Link to="/App/no3/">??????????????????</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/App/no3/no3_1_2">????????????????????????</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/App/no3/no3_1_3">????????????????????????</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/App/no3/no3_1_4">?????????????????????</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/App/no3/no3_1_5">??????????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<FilterOutlined />} title="??????????????????">
                        <Menu.Item key="6"><Link to="/App/no3/no3_2_1">????????????</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/App/no3/no3_2_2">??????????????????</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/App/no3/no3_2_3">?????????????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<RiseOutlined />} title="??????????????????">
                        <Menu.Item key="9"><Link to="/App/no3/no3_3_1">??????????????????</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/App/no3/no3_3_2">??????????????????</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/App/no3/no3_3_3">??????????????????</Link></Menu.Item>
                        <Menu.Item key="12"><Link to="/App/no3/no3_3_4">???????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<UserOutlined />} title="??????????????????">
                        <Menu.Item key="13"><Link to="/App/no3/no3_4_1">??????????????????</Link></Menu.Item>
                        <Menu.Item key="14"><Link to="/App/no3/no3_4_2">??????????????????</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/App/no3/no3_4_3">??????????????????</Link></Menu.Item>
                        <Menu.Item key="16"><Link to="/App/no3/no3_4_4">??????????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<QrcodeOutlined />} title="????????????">
                        <Menu.Item key="17"><Link to="/App/no3/no3_5_1">????????????????????????</Link></Menu.Item>
                        <Menu.Item key="18"><Link to="/App/no3/no3_5_2">????????????????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" icon={<BarChartOutlined />} title="?????????">
                        <Menu.Item key="19"><Link to="/App/no3/no3_6_1">??????????????????</Link></Menu.Item>
                        <Menu.Item key="20"><Link to="/App/no3/no3_6_2">??????????????????</Link></Menu.Item>
                        <Menu.Item key="21"><Link to="/App/no3/no3_6_3">??????????????????</Link></Menu.Item>
                        <Menu.Item key="22"><Link to="/App/no3/no3_6_4">?????????????????????</Link></Menu.Item>
                        <Menu.Item key="23"><Link to="/App/no3/no3_6_5">????????????????????????</Link></Menu.Item>
                        <Menu.Item key="24"><Link to="/App/no3/no3_6_6">??????????????????</Link></Menu.Item>
                        <Menu.Item key="25"><Link to="/App/no3/no3_6_7">?????????????????????</Link></Menu.Item>
                        <Menu.Item key="26"><Link to="/App/no3/no3_6_8">??????????????????</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" icon={<LineChartOutlined />} title="????????????">
                        <Menu.Item key="27"><Link to="/App/no3/no3_7_1">????????????</Link></Menu.Item>
                        <Menu.Item key="28"><Link to="/App/no3/no3_7_2">????????????</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="sub8" icon={<ContainerOutlined />} title="??????????????????">
                        <Link to="/App/no3/no3_8_1">??????????????????</Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div className="no3_box_content">
                <Switch>
                    <Route path="/App/no3/no3_1_2" component={no3_1_2} />
                    <Route path="/App/no3/no3_1_3" component={no3_1_3} />
                    <Route path="/App/no3/no3_1_4" component={no3_1_4} />
                    <Route path="/App/no3/no3_1_5" component={no3_1_5} />

                    <Route path="/App/no3/no3_2_1" component={no3_2_1} />
                    <Route path="/App/no3/no3_2_2" component={no3_2_2} />
                    <Route path="/App/no3/no3_2_3" component={no3_2_3} />

                    <Route path="/App/no3/no3_3_1" component={no3_3_1} />
                    <Route path="/App/no3/no3_3_2" component={no3_3_2} />
                    <Route path="/App/no3/no3_3_3" component={no3_3_3} />
                    <Route path="/App/no3/no3_3_4" component={no3_3_4} />

                    <Route path="/App/no3/no3_4_1" component={no3_4_1} />
                    <Route path="/App/no3/no3_4_2" component={no3_4_2} />
                    <Route path="/App/no3/no3_4_3" component={no3_4_3} />
                    <Route path="/App/no3/no3_4_4" component={no3_4_4} />

                    <Route path="/App/no3/no3_5_1" component={no3_5_1} />
                    <Route path="/App/no3/no3_5_2" component={no3_5_2} />

                    <Route path="/App/no3/no3_6_1" component={no3_6_1} />
                    <Route path="/App/no3/no3_6_2" component={no3_6_2} />
                    <Route path="/App/no3/no3_6_3" component={no3_6_3} />
                    <Route path="/App/no3/no3_6_4" component={no3_6_4} />
                    <Route path="/App/no3/no3_6_5" component={no3_6_5} />
                    <Route path="/App/no3/no3_6_6" component={no3_6_6} />
                    <Route path="/App/no3/no3_6_7" component={no3_6_7} />
                    <Route path="/App/no3/no3_6_8" component={no3_6_8} />

                    <Route path="/App/no3/no3_7_1" component={no3_7_1} />
                    <Route path="/App/no3/no3_7_2" component={no3_7_2} />

                    <Route path="/App/no3/no3_8_1" component={No3_8_1} />

                    <Route path="/App/no3/" component={no3_1_1} />
                </Switch>
            </div>
        </div>
    )
}

export default No3