import {Switch,Route,Link} from 'react-router-dom'

import no2_2_2 from './no2_2_2'
import no2_2_3 from './no2_2_3'
import no2_2_4 from './no2_2_4'
import no2_2_5 from './no2_2_5'
import no2_2_6 from './no2_2_6'
import no2_2_7 from './no2_2_7'
import no2_2_8 from './no2_2_8'

let No2_1_1=function(props){
  
    return(
        <div>
             <Link to="/app/no2/no2_2_2">今日需联系客户</Link><br/>
            <Link to="/app/no2/no2_2_3">分配给我的线索</Link><br/>
            <Link to="/app/no2/no2_2_4">分配给我的客户</Link><br/>
            <Link to="/app/no2/no2_2_5">待审核合同</Link><br/>
            <Link to="/app/no2/no2_2_6">待审核回款</Link><br/>
            <Link to="/app/no2/no2_2_7">待回款提醒</Link><br/>
            <Link to="/app/no2/no2_2_8">即将到期的合同</Link><br/>
            <Switch>
                <Route path="/no2_2_1/no2_2_2" component={no2_2_2} exact></Route>
                <Route path="/no2_2_1/no2_2_3" component={no2_2_3}></Route>
                <Route path="/no2_2_1/no2_2_4" component={no2_2_4}></Route>
                <Route path="/no2_2_1/no2_2_5" component={no2_2_5}></Route>
                <Route path="/no2_2_1/no2_2_6" component={no2_2_6}></Route>
                <Route path="/no2_2_1/no2_2_7" component={no2_2_7}></Route>
                <Route path="/no2_2_1/no2_2_8" component={no2_2_8}></Route>
            </Switch>
        </div>
    )
}
export default No2_1_1