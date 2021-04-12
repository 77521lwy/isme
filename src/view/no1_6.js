import {Switch,Route,Link} from 'react-router-dom' 
import { Tabs } from 'antd';
import No1_6_1 from './no1_6_1'
import No1_6_2 from './no1_6_2'

function App(){
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }
    return(
        <div className="no1_6_nav">
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab={<span><Link to="/App/no1_6">我发起的</Link></span>} key="1">
                        
                    </TabPane>
                    <TabPane tab={<span><Link to="/APP/no1_6/no1_6_2">我审批的</Link></span>} key="2">
                        
                    </TabPane>
                </Tabs>
            </div>
            <div></div>
            <div></div>
            <div>
                <Switch>
                    <Route path='/APP/no1_6/no1_6_2' component={No1_6_2}></Route>
                    <Route path='/APP/no1_6' component={No1_6_1}></Route>
                </Switch>
            </div>
        </div>
    )
}
export default App