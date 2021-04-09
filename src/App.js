import {Switch,Route,Link} from 'react-router-dom' 
import axios from 'axios'
import './App.css';
import No1 from './view/no1'
import No2 from './view/no2'
import No3 from './view/no3'
import No4 from './view/no4'

axios.interceptors.request.use((config)=>{
  if(localStorage.val){
    var login = JSON.parse(localStorage.val)
    config.headers={
      authKey:login.authKey,
      sessionId:login.sessionId
    }
    return config
  }
  else{
    return config
  }
})

function App(props) {
  if(!localStorage.val){
    props.history.push('/')
  }

  axios.post('http://crm.cimns.com/index.php/oa/task/subTaskList',{        
    status: 1,
    limit: 15,
    page: 2,
    // 状态
    // limit 返回数据条数
    // page 页码
  })
  .then((data) => {
    console.log(data)
  })

  console.log(props)
  return (
    <div>
      {/* 头部导航 */}
      <div className="nav_box"> 
        <div className="nav_logo"></div>
        <div className="nav_list">
          <div><Link to="/App">办公</Link> </div>
          <div><Link to="/App/no2">客户管理</Link> </div>
          <div><Link to="/App/no3">商业智能</Link> </div> 
          <div><Link to="/App/no4">项目管理</Link> </div>
        </div>
      </div>
      <div>
        {/* 路由配置 */}
        <Switch>
          <Route path="/App/" component={No1} exact />
          <Route path="/App/no2" component={No2} />
          <Route path="/App/no3" component={No3} />
          <Route path="/App/no4" component={No4} /> 
        </Switch>
      </div>


      
    </div>
  );
}

export default App;
