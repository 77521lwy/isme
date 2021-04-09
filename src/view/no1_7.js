import {Switch,Route,Link} from 'react-router-dom' 
import No1_7_1 from './no1_7_1'
import No1_7_2 from './no1_7_2'

function App(){
    return(
        <div>
            <hr></hr>
            <div><Link to="/App/no1_7">1</Link></div>
            <div><Link to="/APP/no1_7/no1_7_2">2</Link></div>
            <hr></hr>
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