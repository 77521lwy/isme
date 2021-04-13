import {Switch,Route,Link} from 'react-router-dom' 
import { Modal, Button,Tabs,Upload, message,Select} from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import No1_3_1 from './no1_3_1'
import No1_3_2 from './no1_3_2'
import './no1_3.css'
import {useState} from 'react'
import axios from 'axios'


function App(){
    // const { Option } = Select;
    function handleChange(value) {
        console.log(value);
      }
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
        // console.log(data.data.data)
    }, (err) => {
        console.log(err)
    })


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
        <div className="no1_3_nav">
            <div className="no1_3_nav_1">
                <div className="no1_3_title">
                    <div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<span><Link to="/App/no1_3/">我的任务</Link></span>}key="1"></TabPane>
                            <TabPane tab={<span><Link to="/App/no1_3/no1_3_2">我下属的任务</Link></span>}key="2"></TabPane>
                        </Tabs>
                    </div>
                    <div className="no1_3_title_2">
                        <Button type="primary" onClick={showModal}>
                            新建任务
                        </Button>
                        <Modal className="no1_3_Modal" title="新建任务" okText="确定" cancelText="取消" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} maskStyle={{background:'#ddd'}}>
                            <ul className="no1_3_Modal_1">
                                <li>
                                    <h3>* 任务名称</h3>
                                    <input type="text" placeholder="请输入内容" />
                                </li>
                                <li>
                                    <h3>负责人</h3>
                                    <Select labelInValue  defaultValue={{ value: 'lucy' }}  style={{ width: '80%',height:41 }}  onChange={handleChange}>
                                        {lolpp.map((item,index)=>{
                                            return(
                                                <div key={index} style={{ height:41 }}>
                                                    <p>{item.realname}</p>
                                                </div>
                                            )
                                        })}
                                    </Select>
                                </li>
                                <li>
                                    <h3>开始时间</h3>
                                    <input type="text" placeholder="请输入内容"/>
                                </li>
                                <li>
                                    <h3>结束时间</h3>
                                    <input type="text" placeholder="请输入内容"/>
                                </li>
                            </ul>
                            <div className="no1_3_Modal_2">
                                <h3>优先级</h3>
                                <div>高</div>
                                <div>中</div>
                                <div>低</div>
                                <div>无</div>
                            </div>
                            <div className="no1_3_Modal_3">
                                <h3>任务描述</h3>
                                <textarea autoComplete="off" placeholder="请输入内容"/>
                            </div>
                            <div className="no1_3_Modal_4">
                                <Upload {...props}>
                                    <Button icon={<PaperClipOutlined />}>关联业务</Button>
                                </Upload>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div>
                    <div className="no1_3_content">
                        <Switch> 
                            <Route path='/APP/no1_3/no1_3_2' component={No1_3_2}></Route>
                            <Route path='/APP/no1_3/' component={No1_3_1}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default App