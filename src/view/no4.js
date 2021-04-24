import {Route,Link,Switch, Router} from 'react-router-dom'
import { Menu } from 'antd';
import {
  DiffOutlined,
  BarChartOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import no4_1_1 from './no4_1_1'
import no4_1_2 from './no4_1_2'
import no4_2 from './no4_2'
import no4_3 from './no4_3'
import no4_4 from './no4_4'
import no4_6 from './no4_6'
import './no4.css'
import axios from 'axios'



const { SubMenu } = Menu;
moment.locale('zh-cn');
function No4(){
    let [state,setState] = useState({
        collapsed: false,
    })
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    function onOpenChange (keys){
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [projectlist,setproject] = useState([])
    axios.post("http://crm.cimns.com/index.php/work/index/workList").then(
        (res)=>{
            if(projectlist.length<=0){
                setproject(res.data.data)
            }
        }
    )
    return(
        <div  className="no4_box clearfix">
            <div style={{ width: 170 }} className="no4_box_nav">
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={state.collapsed} openKeys={openKeys} onOpenChange={onOpenChange}>
                <SubMenu key="sub1" icon={<DesktopOutlined />} title="工作台">
                    <Menu.Item key="5"><Link to="/App/no4/">我的任务</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/App/no4/no4_1_2">任务日历</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<DiffOutlined />} title="项目">
                    {projectlist.map((item,index)=>{
                        return(
                        <Menu.Item key={index+999}><Link to={'/App/no4/no4_2/'+index}> {item.name}</Link></Menu.Item>
                        )
                    })}
                </SubMenu>
                <Menu.Item key="3" icon={<BarChartOutlined />}>
                    <Link to="/App/no4/no4_3">统计分析</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DiffOutlined />}>
                    <Link to="/App/no4/no4_4">归档项目</Link>
                </Menu.Item>
                <SubMenu key="sub3" icon={<DiffOutlined />} title="标签">
                    <Menu.Item key="9">hgfh</Menu.Item>
                </SubMenu>
                <Menu.Item key="11" icon={<DiffOutlined />}>
                    <Link to="/App/no4/no4_6">回收站</Link>
                </Menu.Item>
                </Menu>
            </div>
            <div className="no4_box_content">
                <Switch>
                    <Route path="/App/no4/no4_1_2" component={no4_1_2}></Route>
                    <Route path="/APP/no4/no4_2/:id" component={no4_2}></Route>
                    <Route path="/App/no4/no4_3" component={no4_3}></Route>
                    <Route path="/App/no4/no4_4" component={no4_4}></Route>
                    <Route path="/App/no4/no4_6" component={no4_6}></Route>
                    <Route path="/App/no4/" component={no4_1_1}></Route>
                </Switch>
            </div>
        </div>
    )
}



export default No4