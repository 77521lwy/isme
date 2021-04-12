import React, { useState } from 'react';
import {Switch,Route,Link} from 'react-router-dom' 
import { Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import No1_1 from './no1_1'
import No1_2 from './no1_2'
import No1_3 from './no1_3'
import No1_4 from './no1_4'
import No1_5 from './no1_5'
import No1_6 from './no1_6'
import No1_7 from './no1_7'

const { SubMenu } = Menu;
function App(){
  let [state,setState] = useState({
    collapsed: false,
  })

  let toggleCollapsed = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return(
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
          <Menu.Item key="1" icon={<span className="iconfont">&#xe625;</span>}>
            <Link className="linkto"  to="/App/">工作台</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<span className="iconfont">&#xe6f5;</span>}>
            <Link className="linkto"  to="/App/no1_2">日程</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<span className="iconfont">&#xe826;</span>}>
            <Link className="linkto"  to="/App/no1_3">任务</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<span className="iconfont">&#xe749;</span>}>
            <Link className="linkto"  to="/App/no1_4">公告</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<span className="iconfont">&#xe63c;</span>}>
            <Link className="linkto"  to="/App/no1_5">日志</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<span className="iconfont">&#xe625;</span>}>
            <Link className="linkto"  to="/App/no1_6">审批</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<span className="iconfont">&#xe6af;</span>}>
            <Link className="linkto"  to="/App/no1_7">通讯录</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="conten">
        <div>
        <Switch>
          <Route path='/APP/no1_2' component={No1_2}></Route>
          <Route path='/APP/no1_3' component={No1_3}></Route>
          <Route path='/APP/no1_4' component={No1_4}></Route>
          <Route path='/APP/no1_5' component={No1_5}></Route>
          <Route path='/APP/no1_6' component={No1_6}></Route>
          <Route path='/APP/no1_7' component={No1_7}></Route>
          <Route path='/APP/' component={No1_1}></Route>
        </Switch>
        </div>
      </div>
    </div>
  )
}
  
  

export default App