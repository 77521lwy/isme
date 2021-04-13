import { Calendar } from 'antd';  //组件1
import React, { useState } from 'react'; //组件2
import { Modal, Button } from 'antd';
import { DatePicker,ConfigProvider } from 'antd'; //组件3 小日历
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
    const { RangePicker } = DatePicker;
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
                        <p>*主题  <input type="text" className="ass acc"></input></p><br/>
                        <p>*参与人  <input type="text" className="ass app"></input></p><br/>
                        <p>备注 </p>
                        <textarea autocomplete="off" className="no2_2_axx" placeholder="请输入内容"></textarea>
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