import {Switch,Route,Link} from 'react-router-dom' 
import No1_1_1 from './no1_1_1'
import No1_1_2 from './no1_1_2'
import No1_1_3 from './no1_1_3'
import No1_1_4 from './no1_1_4'
import No1_1_5 from './no1_1_5'
import No1_1_6 from './no1_1_6'

function App(){
    return(
        <div>
            <hr></hr>
            <div><Link to="/App/">1</Link></div>
            <div><Link to="/APP/no1_1/no1_1_2">2</Link></div>
            <div><Link to="/APP/no1_1/no1_1_3">3</Link></div>
            <div><Link to="/APP/no1_1/no1_1_4">4</Link></div>
            <div><Link to="/APP/no1_1/no1_1_5">5</Link></div>
            <div><Link to="/APP/no1_1/no1_1_6">6</Link></div>
            <hr></hr>
            <div>
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
    )
}
export default App