import {Switch,Route,Link} from 'react-router-dom' 
import No1_5_1 from './no1_5_1'
import No1_5_2 from './no1_5_2'
import No1_5_3 from './no1_5_3'
import No1_5_4 from './no1_5_4'

function App(){
    return(
        <div>
            <hr></hr>
            <div><Link to="/App/no1_5">1</Link></div>
            <div><Link to="/APP/no1_5/no1_5_2">2</Link></div>
            <div><Link to="/APP/no1_5/no1_5_3">3</Link></div>
            <div><Link to="/APP/no1_5/no1_5_4">4</Link></div>
            <hr></hr>
            <div>
                <Switch>
                    <Route path='/APP/no1_5/no1_5_2' component={No1_5_2}></Route>
                    <Route path='/APP/no1_5/no1_5_3' component={No1_5_3}></Route>
                    <Route path='/APP/no1_5/no1_5_4' component={No1_5_4}></Route>
                    <Route path='/APP/no1_5' component={No1_5_1}></Route>
                </Switch>
            </div>
        </div>
    )
}
export default App