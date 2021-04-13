import { Switch, Route, Link } from 'react-router-dom'
import { Menu, Button } from 'antd';
// import moment from 'moment';
import 'moment/locale/zh-cn';

import 'antd/dist/antd.css';
import React, { useState } from 'react';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import no2_0 from './no2_0'
import no2_1 from './no2_1'
import no2_2 from './no2_2'
import no2_3 from './no2_3'
import no2_4 from './no2_4'
import no2_5 from './no2_5'
import no2_6 from './no2_6'
import no2_7 from './no2_7'
import no2_8 from './no2_8'
import no2_9 from './no2_9'


function No2() {
  let [state, setState] = useState({
    collapsed: false,
  })

  let toggleCollapsed = () => {
    setState({
      collapsed: !state.collapsed,
    })
  }
  return (
    <div className='indexto'>
      <div className="nav_one">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={state.collapsed}
          style={{width:150}}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/app/no2/no2_0">仪表盘0</Link><br />

          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/app/no2/no2_1">待办事项1</Link><br />

          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_2">线索2</Link><br />
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_3">客户3</Link><br />
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_4">联系人4</Link><br />
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_5">公海5</Link><br />
          </Menu.Item>
          <Menu.Item key="7" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_6">商机6</Link><br />
          </Menu.Item>
          <Menu.Item key="8" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_7">合同7</Link><br />
          </Menu.Item>
          <Menu.Item key="9" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_8">回款8</Link><br />
          </Menu.Item>
          <Menu.Item key="10" icon={<ContainerOutlined />}>
            <Link to="/app/no2/no2_9">产品9</Link><br />
          </Menu.Item>
        </Menu>
      </div>
      <div className="conten">
        <Switch>
          <Route path="/app/no2/no2_1" component={no2_1}></Route>
          <Route path="/app/no2/no2_2" component={no2_2}></Route>
          <Route path="/app/no2/no2_3" component={no2_3}></Route>
          <Route path="/app/no2/no2_4" component={no2_4}></Route>
          <Route path="/app/no2/no2_5" component={no2_5}></Route>
          <Route path="/app/no2/no2_6" component={no2_6}></Route>
          <Route path="/app/no2/no2_7" component={no2_7}></Route>
          <Route path="/app/no2/no2_8" component={no2_8}></Route>
          <Route path="/app/no2/no2_9" component={no2_9}></Route>
          <Route path="/app/no2" component={no2_0}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default No2