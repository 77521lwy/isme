import {Switch,Route,Link} from 'react-router-dom' 
import { Modal, Button,Tabs,Upload, message} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {useState} from 'react'
import axios from 'axios'
import No1_5_1 from './no1_5_1'
import No1_5_2 from './no1_5_2'
import No1_5_3 from './no1_5_3'
import No1_5_4 from './no1_5_4'
import './no1_5.css'

function App(){
    const [lolpp,setlolpp] =useState([])
    const { TabPane } = Tabs;

    function callback(key) {
    console.log(key);
    }
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
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    return(
        <div className="no1_5_nav">
            <div className="no1_5_nav_1">
                <div className="no1_5_title">
                    <div className="no1_5_title_1">
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
                        <Modal className="no1_5_Modal" title="新建任务" okText="确定" cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={500} maskStyle={{background:'#ddd'}}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="日报" key="1">
                                    <div className="no1_5_day">
                                        <p>今日工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>明日工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>遇到的问题:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                    </div>
                                    <div>
                                        <p>添加照片</p>
                                        <Upload {...props}>
                                            <Button icon={<PlusOutlined />}></Button>
                                        </Upload>
                                    </div>
                                    
                                </TabPane>
                                <TabPane tab="周报" key="2">
                                    <div className="no1_5_day">
                                        <p>本周工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>下周工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>遇到的问题:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                    </div>
                                    <div>
                                        <p>添加照片</p>
                                        <Upload {...props}>
                                            <Button icon={<PlusOutlined />}></Button>
                                        </Upload>
                                    </div>
                                </TabPane>
                                <TabPane tab="月报" key="3">
                                    <div className="no1_5_day">
                                        <p>本月工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>下月工作内容:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                        <p>遇到的问题:</p>
                                        <textarea placeholder="请输入内容"></textarea>
                                    </div>
                                    <div>
                                        <p>添加照片</p>
                                        <Upload {...props}>
                                            <Button icon={<PlusOutlined />}></Button>
                                        </Upload>
                                    </div>
                                </TabPane>
                            </Tabs>
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