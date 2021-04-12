import {Switch,Route,Link} from 'react-router-dom' 
import { Modal, Button,Tabs} from 'antd';
import {useState} from 'react'
import axios from 'axios'
import No1_5_1 from './no1_5_1'
import No1_5_2 from './no1_5_2'
import No1_5_3 from './no1_5_3'
import No1_5_4 from './no1_5_4'
import './no1_5.css'

function App(){
    const [lolpp,setlolpp] =useState([])
    axios.post('http://crm.cimns.com/index.php/admin/users/getUserList').then((data) => {
        if (data.data.code === 101) {
            console.log(data.data.arr)
        }
        else{ 
            if(lolpp.length <= 0){
                setlolpp(data.data.data)
            }
        }
        console.log(data.data.data)
    }, (err) => {
        console.log(err)
    })


    
    const { TabPane } = Tabs;
    const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal(){
    setIsModalVisible(true);
  };

  function handleOk(){
    setIsModalVisible(false);
  };

  function handleCancel(){
    setIsModalVisible(false);
  };
    return(
        <div className="no1_5_nav">
            <div className="no1_5_nav_1">
                <div className="no1_5_title">
                    <div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Link to="/App/no1_5/">全部</Link></span>}key="1">
                                
                            </TabPane>
                            <TabPane tab={<span><Link to="/App/no1_5/no1_5_2">我发出的日志</Link></span>}key="2">
                                
                            </TabPane>
                            <TabPane tab={<span><Link to="/App/no1_5/no1_5_3">我收到的</Link></span>}key="3">
                                
                            </TabPane>
                            <TabPane tab={<span><Link to="/App/no1_5/no1_5_4">未读</Link></span>}key="4">
                                
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="no1_5_title_2">
                        <Button type="primary" onClick={showModal}>
                            新建任务
                        </Button>
                        <Modal className="no1_5_Modal" title="新建任务" okText="确定" cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} maskStyle={{background:'#ddd'}}>
                            
                        </Modal>
                    </div>
                </div>
                <div>
                    <div className="no1_5_content">
                        <Switch> 
                            <Route path='/APP/no1_5/no1_5_2' component={No1_5_2}></Route>
                            <Route path='/APP/no1_5/no1_5_3' component={No1_5_3}></Route>
                            <Route path='/APP/no1_5/no1_5_4' component={No1_5_4}></Route>
                            <Route path='/APP/no1_5/' component={No1_5_1}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default App