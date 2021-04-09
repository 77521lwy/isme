import { Switch, Route, Link } from 'react-router-dom'
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


function No2() {
    return (
        <div>
            <Link to="/app/no2/no2_0_1">仪表盘</Link><br/>
            <Link to="/app/no2/no2_1_1">待办事项</Link><br/>
            <Link to="/app/no2/no2_2_1">线索</Link><br/>
            <Link to="/app/no2/no2_3_1">客户</Link><br/>
            <Link to="/app/no2/no2_4_1">联系人</Link><br/>
            <Link to="/app/no2/no2_5_1">公海</Link><br/>
            <Link to="/app/no2/no2_6_1">商机</Link><br/>
            <Link to="/app/no2/no2_7_1">合同</Link><br/>
            <Link to="/app/no2/no2_8_1">回款</Link><br/>
            <Link to="/app/no2/no2_9_1">产品</Link><br/>
            
            <Switch>
                <Route path="/app/no2/no2_0_1" component={no2_0_1} exact></Route>
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
        </div>
    )
}

export default No2