import React, { useState ,useEffect} from 'react';
import { Cascader ,ConfigProvider,Modal, Button,Input } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'


const options = [
    {
        value: '1',
        label: '待跟进',
    },
    {
        value: '2',
        label: '已跟进',
    }
];
const options2 = [
    {
        value: '1',
        label: '我的',
    },
    {
        value: '2',
        label: '我下属的',
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
let No2_1_1=function(props){
    const [todayList,settodayList] = useState([])
    const [typelista,settypelist] = useState([])
    axios.post("http://crm.cimns.com/index.php/admin/field/getField",{
        types: 'crm_customer',
        module: 'crm',
        controller: 'customer',
        action: 'index'

    })
    .then(res => {
        if(todayList.length <=0){
            settodayList(res.data.data)
        }
        console.log(res)
        
    })
    useEffect(()=>{
        let aee = []
        for (let i = 0; i <  todayList.length; i++){
            aee.push(todayList[i].field)
        }
        settypelist(aee)
        console.log(typelista)
    },[todayList])
    
    const [client,setclient] = useState([])
    axios.post("http://crm.cimns.com/index.php/crm/message/todayCustomer",{
        page: 1,
        limit: 15,
        types: 'list',
        isSub: 0,
        type: 1

    })
    .then(res => {
        let numlist = res.data.data.list
        // console.log(numlist.length)
        if(numlist.length == 0){
            if(client == ''){
            }
            else{
                setclient([])
            }
        }
        else{
            if(client.length <= 0){
                setclient(numlist)
            }
        }
        // console.log(client)
        
        // console.log(typelista)
    })
    .catch(err => {
        console.error(err); 
    })
    function onChange(value) {
        console.log(value);
    }

    // 筛选
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
    return(
        <div className="no2_1_1_box">
            <div className="no2_1_1_top">
                分配给我的客户
            </div>
            <div className="no2_1_1_nav clearfix">
                {/* 1 */}
                <div className="no2_1_1_nav_1">
                    <ConfigProvider locale={zhCN}>
                        <Cascader 
                        options={options} onChange={onChange}
                        allowClear={false}
                        style={{width:'180px',height:'31px'}}
                        placeholder="待跟进" />
                    </ConfigProvider>
                </div>
                {/* 3高级筛选 */}
                <div className="no2_1_1_nav_2" onClick={showModal}>
                    <span className="no2_1_1_nav_2_txt iconfont">&#xe6be;</span>高级筛选
                </div>
                {/* 高级筛选里面的内容 */}
                <Modal visible={isModalVisible} width={900} footer={null} onOk={handleOk} onCancel={handleCancel}>
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
                        <div className="no2_1_1_nav_2_btn_del no" onClick={handleOk}>取消</div>
                        <div className="no2_1_1_nav_2_btn_del yes" onClick={handleOk}>确认</div>
                    </div>
                </Modal>
            </div>
            {/* 内容列表 */}
            <div className="no2_1_1_content">
                <div className="no2_1_1_content_box">
                    <div className="no2_1_1_content_box_top">
                        {todayList.map((item,index)=>{
                            return(
                                <div key={index}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="no2_1_1_content_box_content">
                        {(function(){
                            if(client == ''){
                                return (<div className="no2_1_1_content_box_content_null">暂无数据</div>)
                            }
                            else{
                                return(
                                    client.map((ite,indx)=>{
                                        return(
                                            <div key={indx} className="no2_1_1_content_box_content_list">
                                                <div>{ite.name}</div>
                                                <div>{ite.level}</div>
                                                <div>{ite.industry}</div>
                                                <div>{ite.source}</div>
                                                <div>{ite.deal_status}</div>
                                                <div>{ite.telephone}</div>
                                                <div>{ite.website}</div>
                                                <div>{ite.next_time}</div>
                                                <div>{ite.remark}</div>
                                                <div>{ite.mobile}</div>
                                                <div>{ite.create_user_id}</div>
                                                <div>{ite.update_time}</div>
                                                <div>{ite.create_time}</div>
                                                <div>{ite.owner_user_id}</div>
                                                <div>{ite.last_record}</div>
                                                <div>{ite.address}</div>
                                                <div>{ite.detail_address}</div>
                                            </div>
                                        )
                                    })
                                )
                            }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default No2_1_1