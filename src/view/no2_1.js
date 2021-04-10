import {Switch,Route,Link} from 'react-router-dom'

import no2_1_1 from './no2_1_1'
import no2_1_2 from './no2_1_2'
import no2_1_3 from './no2_1_3'
import no2_1_4 from './no2_1_4'
import no2_1_5 from './no2_1_5'
import no2_1_6 from './no2_1_6'
import no2_1_7 from './no2_1_7'

let No2_1=function(props){
  
    return(
        <div>
            <Link to="/app/no2/no2_1/no2_1_1">今日需联系客户</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_2">分配给我的线索</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_3">分配给我的客户</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_4">待审核合同</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_5">待审核回款</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_6">待回款提醒</Link><br/>
            <Link to="/app/no2/no2_1/no2_1_7">即将到期的合同</Link><br/>
            <div>
                <Switch>
                    <Route path="/app/no2/no2_1/no2_1_1" component={no2_1_1} exact></Route>
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