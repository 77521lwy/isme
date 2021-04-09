import {Switch,Route,Link} from 'react-router-dom' 
import No1_6_1 from './no1_6_1'
import No1_6_2 from './no1_6_2'

function App(){
    return(
        <div>
            <hr></hr>
            <div><Link to="/App/no1_6">1</Link></div>
            <div><Link to="/APP/no1_6/no1_6_2">2</Link></div>
            <hr></hr>
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