import React, { useState } from 'react';
import { Modal, Button ,Cascader ,ConfigProvider,Input} from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import './no2_2.css'

const options = [
    {
        value: '1',
        label: '我负责的产品',
    },
    {
        value: '3',
        label: '下属负责的产品',
    },
    {
        value: '4',
        label: '全部产品',
    }
];
const options3 = [
    {
        value: '1',
        label: '客户名称',
    },
    {
        value: '2',
        label: '客户级别',
    },
    {
        value: '3',
        label: '客户行业',
    },
    {
        value: '4',
        label: '客户来源',
    },
    {
        value: '5',
        label: '成交状态',
    },
    {
        value: '6',
        label: '电话',
    },
    {
        value: '7',
        label: '网址',
    },
    {
        value: '8',
        label: '下次联系时间',
    },
    {
        value: '9',
        label: '备注',
    },
    {
        value: '10',
        label: '手机',
    },
    {
        value: '11',
        label: '创建人',
    },
    {
        value: '12',
        label: '更新时间',
    }
];
const options4 = [
    {
        value: '1',
        label: '等于',
    },
    {
        value: '2',
        label: '不等于',
    },
    {
        value: '3',
        label: '包含',
    },
    {
        value: '4',
        label: '不包含',
    },
    {
        value: '5',
        label: '开始于',
    },
    {
        value: '6',
        label: '结束于',
    },
    {
        value: '7',
        label: '为空',
    },
    {
        value: '8',
        label: '不为空',
    },
    {
        value: '9',
        label: '大于',
    },
    {
        value: '10',
        label: '大于等于',
    },
    {
        value: '11',
        label: '小于',
    },
    {
        value: '12',
        label: '小于等于',
    }
];
let No2_2=function(props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  function onChange(value) {
    console.log(value);
}
const [leadsa,setleadsa] =useState([])
axios.post("http://crm.cimns.com/index.php/admin/field/getField",{
    types: 'crm_product',
    module: 'crm',
    action: 'index',
    controller: 'product',
})
.then(res => {
    // console.log(res)
    if(leadsa.length <=0){
        setleadsa(res.data.data)
    }
    console.log(leadsa)
})
.catch(err => {
    console.error(err); 
})
    return(
        <div className="no2_2_box">
            <div className="no2_2_box_top clearfix">
                <div className="no2_2_box_top_left">
                    产品管理
                </div>
                <div className="no2_2_box_top_middle">
                    <div className="no2_2_box_top_middle_content">
                        <input placeholder="请输入产品名称/手机/电话"></input>
                        <span className="iconfont">&#xe612;</span>
                    </div>
                </div>
                <div className="no2_2_box_top_right">
                    {/* 组件新建产品 */}
                    <Button type="primary" style={{margin:0,height:30}} onClick={showModal}>
                        新建产品
                    </Button>
                    <div className="no2_2_box_top_right_list">
                        <ConfigProvider locale={zhCN}>
                            <Cascader 
                            options={options} onChange={onChange}
                            allowClear={false}
                            style={{width:'70px',height:'31px'}}
                            placeholder="更多" />
                        </ConfigProvider>
                    </div>
                    <Modal footer={null} title="新建产品" visible={isModalVisible} onOk={handleOk} width={700} style={{width:700}} onCancel={handleCancel}>
                        <div className="no2_2_box_top_right_list_content">
                            <p className="no2_2_box_top_right_list_name">基本信息</p>
                            <div className="no2_0_top_item_input clearfix">
                                <div className="no2_0_top_item_input_box">
                                    <p>产品名称</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>产品来源</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>电话</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>手机</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>客户行业</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>客户级别</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>地址</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>下次联系时间</p>
                                    <div className="no2_0_top_item_input_box_box">
                                        <input></input>
                                    </div>
                                </div>
                                <div className="no2_0_top_item_input_box">
                                    <p>备注</p>
                                    <div className="no2_0_top_item_input_box_box_textarea">
                                        <textarea></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="no2_2_box_content">
                <div className="no2_2_box_content_top clearfix">
                    <div className="no2_2_box_content_top_1">
                        场景:  
                        <ConfigProvider locale={zhCN}>
                            <Cascader 
                            options={options} onChange={onChange}
                            allowClear={false}
                            style={{width:'170px',height:'31px',border:'none'}}
                            placeholder="全部产品" />
                        </ConfigProvider>
                    </div>
                    <div className="no2_2_box_content_top_2">
                        <div className="no2_1_1_nav_2" onClick={showModal2}>
                            <span className="no2_1_1_nav_2_txt iconfont">&#xe6be;</span>高级筛选
                        </div>
                        <Modal visible={isModalVisible2} width={900} footer={null} onOk={handleOk2} onCancel={handleCancel2}>
                            <p className="no2_1_1_nav_2_title">高级筛选</p>
                            <p className="no2_1_1_nav_2_anme">筛选条件</p>
                            <div className="no2_1_1_nav_2_content clearfix">
                            {/* 11 */}
                            <div className="no2_1_1_nav_4">
                                <ConfigProvider locale={zhCN}>
                                    <Cascader 
                                    options={options3} onChange={onChange}
                                    allowClear={false}
                                    style={{width:'280px',height:'31px'}}
                                    placeholder="请选择要筛选的字段名" />
                                </ConfigProvider>
                            </div>
                                {/* 22 */}
                                <div className="no2_1_1_nav_5">
                                    <ConfigProvider locale={zhCN}>
                                        <Cascader 
                                        options={options4} onChange={onChange}
                                        allowClear={false}
                                        style={{width:'150px',height:'31px'}}
                                        placeholder="等于" />
                                    </ConfigProvider>
                                </div>
                                {/* 33 */}
                                <div className="no2_1_1_nav_6">
                                    <Input placeholder="请输入筛选条件" />
                                </div>
                            </div>
                            <div className="no2_1_1_nav_2_btn">
                                <div className="no2_1_1_nav_2_btn_del no" onClick={handleOk2}>取消</div>
                                <div className="no2_1_1_nav_2_btn_del yes" onClick={handleOk2}>确认</div>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div className="no2_2_box_content_list">
                    <div className="no2_2_box_content_list_top">
                        {leadsa.map((item,index)=>{
                            return(
                                <div key={index}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="no2_2_box_content_list_content">
                        <p>暂无数据</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default No2_2