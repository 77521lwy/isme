import {Switch,Route,Link} from 'react-router-dom' 
import No1_3_1 from './no1_3_1'
import No1_3_2 from './no1_3_2'


function App(){
    return(
        <div>
            <div><Link to="/App/no1_3/">31</Link></div>
            <div><Link to="/App/no1_3/no1_3_2">32</Link></div>
            
            <div>
               <Switch> 
                    <Route path='/APP/no1_3/no1_3_2' component={No1_3_2}></Route>
                    <Route path='/APP/no1_3' component={No1_3_1}></Route>
                </Switch>
            </div>
        </div>
    )
}
export default App