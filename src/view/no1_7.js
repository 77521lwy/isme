import {Switch,Route,Link} from 'react-router-dom' 
import { Tabs} from 'antd';
import No1_7_1 from './no1_7_1'
import No1_7_2 from './no1_7_2'
import './no1_3.css'




function App(){
    const { TabPane } = Tabs;
    return(
        <div className="no1_3_nav">
            <div className="no1_3_nav_1">
                <div className="no1_3_title">
                    <div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Link to="/App/no1_7/">人员</Link></span>}key="1">
                                
                            </TabPane>
                            <TabPane tab={<span><Link to="/App/no1_7/no1_7_2">部门</Link></span>}key="2">
                                
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="no1_3_content">
                    <Switch> 
                        <Route path='/APP/no1_7/no1_7_2' component={No1_7_2}></Route>
                        <Route path='/APP/no1_7/' component={No1_7_1}></Route>
                    </Switch>
                </div>
            </div>
            
        </div>
    )
}
export default App