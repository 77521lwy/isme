import { Calendar } from 'antd';  //组件1
import React, { useState } from 'react'; //组件2
import { Modal, Button } from 'antd';
import { DatePicker,ConfigProvider } from 'antd'; //组件3 小日历
import axios from 'axios' //数据
import {  Alert,Select } from 'antd';  //组件1
import {  Upload, } from 'antd';
import {  Space } from 'antd'; //组件3 小日历
import { UploadOutlined } from '@ant-design/icons';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';



import './no1_2.css'
moment.locale('zh-cn')

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
}
function App() {

    
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
          method: 'POST',
          body: file,
        })
          .then(res => res.json())
          .then(({ thumbnail }) => thumbnail);
      },
    };
    




    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
    console.log(`selected ${value}`);
    }

    const [lolp, setlolp] = useState([])
    axios.post('http://crm.cimns.com/index.php/admin/users/getUserList').then((data) => {
        if (data.data.code === 101) {
            console.log(data.data.arr)
        }
        else{
            if(lolp.length <=0){
                setlolp(data.data.data)
            }
        }
        console.log(lolp)
    }, (err) => {
        console.log(err)
    })

    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal() {
        setIsModalVisible(true);
    };

    function handleOk() {
        setIsModalVisible(false);
    };

    function handleCancel() {
        setIsModalVisible(false);
    };
    return (

        <div className="no1_2_box">
            <div className="no1_2_nav">   {/* 导航部分 */}
                <div className="no1_1_navtop">
                    <div>
                        <button className="navtop_left">今天</button>
                        <button className="navtop_rigth">日</button>
                        <button className="navtop_rigth">周</button>
                        <button className="navtop_rigth bg">月</button>
                    </div>
                </div>
                <div className="nav_center">
                    <span className="iconfont zs"><button>&#xe605;</button></span>
                    <h2 className="rq">2019年 四月</h2>
                    <span className="iconfont zz"><button>&#xe647;</button></span>
                </div>
                <div className="nav_rigth"> {/*创建日程*/}
                    <Button type="primary" onClick={showModal}>
                        创建日程
                    </Button>
                    <Modal title="Basic Modal" title="创建日程" okText="保存" cancelText="取消" width={800} maskStyle={{ background: '#ddd' }} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>*主题  <input type="text" className="ass acc"></input></p><br />
                        <p ><div className="no1_2_zzzzz">*参与人</div> <Select mode="tags" style={{ width: '50%'}}  placeholder="参与成员" onChange={handleChange}>
                                {lolp.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{item.username}</p>
                                        </div>
                                    )
                                })}
                            </Select>  
                           
                        </p><br />
                        <p>备注 </p>
                        <textarea className="no2_2_axx" placeholder="请输入内容"></textarea>
                        <div className="no1_2_guanlian">
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>关联业务</Button>
                            </Upload>        
                        </div>
                        
                    </Modal>

                </div>
            </div>

            <div className="no1_2_content"> {/*  内容 */}
                <ConfigProvider locale={zhCN}> <Calendar onPanelChange={onPanelChange} />   {/*ant此组件功能插入不进去*/}</ConfigProvider>

            </div>
        </div>
    )
}
export default App