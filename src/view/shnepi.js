import React, { useState } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'



moment.locale('zh-cn');

function App(porps){
    const { Option } = Select;
    const [itena,setitena] = useState([])
    axios.post('http://crm.cimns.com/index.php/oa/examine/read',{
        id:1
    })
    .then(res => {
        console.log(res)
        if(itena.length<=0){
            setitena(res.data.data)
        }
        console.log(itena)
    })
    .catch(err => {
        console.error(err); 
    })
    console.log(porps)
    const [state,setState] = useState({ visible: false })
    const showDrawer = () => {
      setState({
        visible: true,
      });
    };
    const onClose = () => {
      setState({
        visible: false,
      });
    };
    return (
    <div>
        <p style={{margin:'0px'}} onClick={showDrawer}> {porps.us.title} </p>
        <Drawer
        title={itena.category_name}
        width={720}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
            <div
            style={{
                textAlign: 'right',
            }}
            >
            </div>
        }
        >
        <Form layout="vertical" hideRequiredMark>
            <div className="plosa">
                <p> <span>请假类型</span>  {itena.type_id} </p>
                <p> <span>审批内容</span>  {itena.content} </p>
                <p> <span>开始时间</span>  {itena.create_time} </p>
                <p> <span>结束时间</span>  {itena.end_time} </p>
                <p> <span>时长(天)</span>  {itena.type_id} </p>
                <p> <span>备注</span>  {itena.remark} </p>
            </div>
            <div className="plosa_content">
                <h3>审核信息</h3>
                <div className="plosa_content_box">
                    <div className="old_content_box">
                        <div className="old_content_box_img">
                            <img src="" alt="oldlogo"></img>
                        </div>
                        <div className="iconfont">&#xe647;</div>
                        <div className="old_content_box_img">
                            <img src="" alt="oldlogo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
        </Drawer>
    </div>
    )
};

// render(<App />, document.getElementById('root'));
export default App