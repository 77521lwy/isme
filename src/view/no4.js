import {Route,Link,Switch} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
// 
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import no4_1 from './no4_1'
import no4_1_1 from './no4_1_1'
import no4_1_2 from './no4_1_2'
import no4_2 from './no4_2'
import no4_3 from './no4_3'
import no4_4 from './no4_4'
import no4_5 from './no4_5'
import no4_6 from './no4_6'
const { SubMenu } = Menu;
moment.locale('zh-cn');
function No4(){
    let [state,setState] = useState({
        collapsed: false,
    })

    let toggleCollapsed = () => {
        setState({
            collapsed: !state.collapsed,
        })
    }
    return(
        <div>
            <Link to="/App/no4">工作台</Link><br></br>
            <Link to="/App/no4/no4_1_1">我的任务</Link><br></br>
            <Link to="/App/no4/no4_1_2">任务日历</Link><br></br>
            <Link to="/App/no4/no4_2">项目</Link><br></br>
            <Link to="/App/no4/no4_3">统计分析</Link><br></br>
            <Link to="/App/no4/no4_4">归档项目</Link><br></br>
            <Link to="/App/no4/no4_5">标签</Link><br></br>
            <Link to="/App/no4/no4_6">回收站</Link><br></br>
            <Switch>
                <Route path="/App/no4/no4_1_1" component={no4_1_1}></Route>
                <Route path="/App/no4/no4_1_2" component={no4_1_2}></Route>
                <Route path="/App/no4/no4_2" component={no4_2}></Route>
                <Route path="/App/no4/no4_3" component={no4_3}></Route>
                <Route path="/App/no4/no4_4" component={no4_4}></Route>
                <Route path="/App/no4/no4_5" component={no4_5}></Route>
                <Route path="/App/no4/no4_6" component={no4_6}></Route>
                <Route path="/App/no4" component={no4_1}></Route>
            </Switch>
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={state.collapsed}
                >
                <SubMenu key="sub1" icon={<MailOutlined />} title="工作台">
                    <Menu.Item key="5">我的任务</Menu.Item>
                    <Menu.Item key="6">任务日历</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="项目">
                    <Menu.Item key="7">Option 9</Menu.Item>
                    <Menu.Item key="8">Option 10</Menu.Item>
                </SubMenu>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    统计分析
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    归档项目
                </Menu.Item>
                <SubMenu key="sub3" icon={<MailOutlined />} title="标签">
                    <Menu.Item key="9">我的任务</Menu.Item>
                    <Menu.Item key="10">任务日历</Menu.Item>
                </SubMenu>
                <Menu.Item key="11" icon={<ContainerOutlined />}>
                    回收站
                </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}



export default No4