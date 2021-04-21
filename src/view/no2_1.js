import {Switch,Route,Link} from 'react-router-dom'

import no2_1_1 from './no2_1_1'
import no2_1_2 from './no2_1_2'
import no2_1_3 from './no2_1_3'
import no2_1_4 from './no2_1_4'
import no2_1_5 from './no2_1_5'
import no2_1_6 from './no2_1_6'
import no2_1_7 from './no2_1_7'
import { Tabs } from 'antd';
import { useState } from 'react'
import './no2_1.css'

const { TabPane } = Tabs;

let No2_1=function(props){
    const state= useState({
    tabPosition: 'left',
    })
    const { tabPosition } = state;
    return(
        <div className="no2_1_box clearfix">
            <div className="no2_1_top">
                代办事项
            </div>
            <div className="no2_1_nav">
                <Tabs tabPosition="left"  style={{width:'146px'}} hideAdd={false} >
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/">今日需联系客户</Link>} key="1">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_2">分配给我的线索</Link>} key="2">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_3">分配给我的客户</Link>} key="3">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_4">待审核合同</Link>} key="4">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_5">待审核回款</Link>} key="5">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_6">待回款提醒</Link>} key="6">
                    </TabPane>
                    <TabPane style={{width:'200px'}} tab={<Link to="/app/no2/no2_1/no2_1_7">即将到期的合同</Link>} key="7">
                    </TabPane>
                </Tabs>
            </div>
            <div className="no2_1_content">
                <Switch>
                    <Route path="/app/no2/no2_1/" component={no2_1_1} exact></Route>
                    <Route path="/app/no2/no2_1/no2_1_2" component={no2_1_2}></Route>
                    <Route path="/app/no2/no2_1/no2_1_3" component={no2_1_3}></Route>
                    <Route path="/app/no2/no2_1/no2_1_4" component={no2_1_4}></Route>
                    <Route path="/app/no2/no2_1/no2_1_5" component={no2_1_5}></Route>
                    <Route path="/app/no2/no2_1/no2_1_6" component={no2_1_6}></Route>
                    <Route path="/app/no2/no2_1/no2_1_7" component={no2_1_7}></Route>
                </Switch>
            </div>
        </div>
    )
}
export default No2_1