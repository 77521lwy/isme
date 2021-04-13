import {Switch,Route,Link} from 'react-router-dom' 
import { Modal, Button,Tabs,Upload, message,Select} from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import No1_7_1 from './no1_7_1'
import No1_7_2 from './no1_7_2'
import './no1_3.css'
import {useState} from 'react'
import axios from 'axios'




function App(){
    const { Option } = Select;


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
                            <TabPane tab={<span><Link to="/App/no1_7/">人员</Link></span>}key="1">
                                
                            </TabPane>
                            <TabPane tab={<span><Link to="/App/no1_7/no1_7_2">部门</Link></span>}key="2">
                                
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div>
                    <div className="no1_3_content">
                        <Switch> 
                            <Route path='/APP/no1_7/no1_7_2' component={No1_7_2}></Route>
                            <Route path='/APP/no1_7/' component={No1_7_1}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default App