import {Switch,Route,Link} from 'react-router-dom' 
import { Tabs } from 'antd';
import Rili from './rili'
import './no1_1.css'
import No1_1_1 from './no1_1_1'
import No1_1_2 from './no1_1_2'
import No1_1_3 from './no1_1_3'
import No1_1_4 from './no1_1_4'
import No1_1_5 from './no1_1_5'
import No1_1_6 from './no1_1_6'

const { TabPane } = Tabs;

function App(){
    function callback(key) {
        console.log(key);
      }
    return(
        <div className="no1_1_box">
            <div className="no1_1_left">
                <div>
                    <div className="no1_1_nav">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab={<div><Link to="/App/">全部</Link></div>} key="1">
                            
                            </TabPane>
                            <TabPane tab={<span><Link to="/APP/no1_1/no1_1_2">日志</Link></span>} key="2">
                            
                            </TabPane>
                            <TabPane tab={<span><Link to="/APP/no1_1/no1_1_3">审批</Link></span>} key="3">
                            
                            </TabPane>
                            <TabPane tab={<span><Link to="/APP/no1_1/no1_1_4">任务</Link></span>} key="4">
                            
                            </TabPane>
                            <TabPane tab={<span><Link to="/APP/no1_1/no1_1_5">日程</Link></span>} key="5">
                            
                            </TabPane>
                            <TabPane tab={<span><Link to="/APP/no1_1/no1_1_6">公告</Link></span>} key="6">
                            
                            </TabPane>
                        </Tabs>
                        
                        
                        
                        
                        
                        
                    </div>
                    <div className="no1_1_content">
                        <Switch>
                            <Route path='/APP/no1_1/no1_1_2' component={No1_1_2}></Route>
                            <Route path='/APP/no1_1/no1_1_3' component={No1_1_3}></Route>
                            <Route path='/APP/no1_1/no1_1_4' component={No1_1_4}></Route>
                            <Route path='/APP/no1_1/no1_1_5' component={No1_1_5}></Route>
                            <Route path='/APP/no1_1/no1_1_6' component={No1_1_6}></Route>
                            <Route path='/APP/' component={No1_1_1}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <div className="no1_1_right">
                <div className="no1_1_renwu">
                    <div className="no1_1_renwu_title">
                        任务
                    </div>
                    <div className="no1_1_renwu_content">

                    </div>
                </div>
                <div className="no1_1_richeng">
                    <div className="no1_1_yicheng_title clearfix">
                        <div className="no1_1_yicheng_tit">日程</div>
                        <div className="no1_1_yicheng_jia"> <span className="iconfont">&#xe711;</span>创建</div>
                    </div>
                    <div className="no1_1_renwu_content">
                        <Rili></Rili>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App