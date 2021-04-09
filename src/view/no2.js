import { Switch, Route, Link } from 'react-router-dom'
import { Menu, Button } from 'antd';
// import moment from 'moment';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.css';
import React,{ useState } from 'react';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
import no2_0_1 from './no2_0_1'
import no2_1_1 from './no2_1_1'
import no2_2_1 from './no2_2_1'
import no2_3_1 from './no2_3_1'
import no2_4_1 from './no2_4_1'
import no2_5_1 from './no2_5_1'
import no2_6_1 from './no2_6_1'
import no2_7_1 from './no2_7_1'
import no2_8_1 from './no2_8_1'
import no2_9_1 from './no2_9_1'


const { SubMenu } = Menu;
function No2(){
    let [state,setState] =useState({
        collapsed: false,
      })
    
     let toggleCollapsed = () => {
        setState({
          collapsed: !state.collapsed,
        })}
    return (
        <div>
            <Link to="/app/no2/no2_0_1">仪表盘0</Link><br/>
            <Link to="/app/no2/no2_1_1">待办事项1</Link><br/>
            <Link to="/app/no2/no2_2_1">线索2</Link><br/>
            <Link to="/app/no2/no2_3_1">客户3</Link><br/>
            <Link to="/app/no2/no2_4_1">联系人4</Link><br/>
            <Link to="/app/no2/no2_5_1">公海5</Link><br/>
            <Link to="/app/no2/no2_6_1">商机6</Link><br/>
            <Link to="/app/no2/no2_7_1">合同7</Link><br/>
            <Link to="/app/no2/no2_8_1">回款8</Link><br/>
            <Link to="/app/no2/no2_9_1">产品9</Link><br/>
            <Switch>
                <Route path="/app/no2" component={no2_0_1} exact></Route>
                <Route path="/app/no2/no2_1_1" component={no2_1_1}></Route>
                <Route path="/app/no2/no2_2_1" component={no2_2_1}></Route>
                <Route path="/app/no2/no2_3_1" component={no2_3_1}></Route>
                <Route path="/app/no2/no2_4_1" component={no2_4_1}></Route>
                <Route path="/app/no2/no2_5_1" component={no2_5_1}></Route>
                <Route path="/app/no2/no2_6_1" component={no2_6_1}></Route>
                <Route path="/app/no2/no2_7_1" component={no2_7_1}></Route>
                <Route path="/app/no2/no2_8_1" component={no2_8_1}></Route>
                <Route path="/app/no2/no2_9_1" component={no2_9_1}></Route>
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
          inlineCollapsed={  state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
           仪表盘
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            待办事项
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            线索
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            客户
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            联系人
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            公海
          </Menu.Item>
          <Menu.Item key="7" icon={<ContainerOutlined />}>
            商机
          </Menu.Item>
          <Menu.Item key="8" icon={<ContainerOutlined />}>
            合同
          </Menu.Item>
          <Menu.Item key="9" icon={<ContainerOutlined />}>
            回款
          </Menu.Item>
          
        </Menu>
      </div>
        </div>
    )
    }

export default No2