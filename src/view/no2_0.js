import './no2_0.css'
import  img from '../images/title.png'
import { Cascader } from 'antd';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Tabs } from 'antd';

let No2_0=function(){
    const options = [
        {
          value: '今天',
          label: '今天',
        },
        {
            value: '昨天',
            label: '昨天',
        },
        {
            value: '本周',
            label: '本周',
        },
        {
            value: '上周',
            label: '上周',
        },
        {
            value: '本月',
            label: '本月',
        },
        {
            value: '上月',
            label: '上月',
        },
        {
            value: '本季度',
            label: '本季度',
        },
          {
              value: '上季度',
              label: '上季度',
        },
        {
          value: '本年',
          label: '本年',
        },
        {
          value: '去年',
          label: '去年',
        },
        {
           value: '自定义',
           label: '自定义',
        },
      ];
      
      function onChange(value) {
        console.log(value);
      }
        const  type = false
        const [isModalVisible, setIsModalVisible] = useState(false);
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
        const handleCancel = () => {
          setIsModalVisible(false);
        };
        const { TabPane } = Tabs;
    return(
        <div className="no2_0_main">
            <div className="no2_0_content">
                <div className="no2_0_header">
                    <div className="no2_0_img">
                        <img src={img}/>
                    </div>
                    <div className="no2_0_title clearfix">
                        <h3 className="no2_0_h">本人及下属&nbsp;&nbsp;|&nbsp;&nbsp;</h3>
                        <span className="no2_0_s">切换</span>
                        <div className="no2_0_input">
                            <Cascader options={options} onChange={onChange} allowClear={type}  placeholder="本年" />
                        </div>
                    </div>
                    <div className="no2_0_right">
                        <Button type="primary" onClick={showModal} style={{margin:'10px'}}>
                            数据重查
                        </Button>
                        <Modal title="查重工具"okText="取消" cancelText="确认" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p>1111111111111111</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    </div>
                </div>
                <div className="no2_0_t">
                    <div className="no2_0_l"></div>
                </div>
            </div>
        </div>
    )
   
}
export default No2_0