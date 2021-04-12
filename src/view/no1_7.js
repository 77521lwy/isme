import {Switch,Route,Link} from 'react-router-dom' 
import No1_7_1 from './no1_7_1'
import No1_7_2 from './no1_7_2'
import { Tabs } from 'antd';

function App(){
    const { TabPane } = Tabs;
    return(
        <div>
            {/* <hr></hr> */}
            <div className="no1_7_box">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab={<span><Link to="/App/no1_7">员工</Link></span>} key="1">

                    </TabPane>
                    <TabPane tab={<span><Link to="/APP/no1_7/no1_7_2">部门</Link></span>} key="2">

                    </TabPane>
                </Tabs>
            </div>
            {/* <hr></hr> */}
            <div>
                <Switch>
                    <Route path='/APP/no1_7/no1_7_2' component={No1_7_2}></Route>
                    <Route path='/APP/no1_7' component={No1_7_1}></Route>
                </Switch>
            </div>
           
        </div>
    )
}
export default App