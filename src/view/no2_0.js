import React, { useState } from 'react';
import { Cascader ,ConfigProvider,Modal, Button ,Tabs,message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import  title from  '../images/title.png'
import axios from 'axios'
import imga from '../images/achievement.png'
import imgb from '../images/sale.png'
import Each from './each'

moment.locale('zh-cn');
const { TabPane } = Tabs;

const options = [
    {
        value: '1',
        label: '今天',
    },
    {
        value: '2',
        label: '昨天',
    },
    {
        value: '3',
        label: '本周',
    },
    {
        value: '4',
        label: '上周',
    },
    {
        value: '5',
        label: '本月',
    },
    {
        value: '6',
        label: '上月',
    },
    {
        value: '7',
        label: '本季度',
    },
    {
        value: '8',
        label: '上季度',
    },
    {
        value: '9',
        label: '本年',
    },
    {
        value: '10',
        label: '去年',
    },
    {
        value: '11',
        label: '自定义',
    },


  ];
  
let No2_0=function(props){
    function onChange(value) {
        console.log(value);
    }

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
    function callback(key) {
        console.log(key);
      }
      
      const error = () => {
        message.error('查询条件不能为空');
      };
      const [briefing,setbriefing] = useState([])
      axios.post('http://crm.cimns.com/index.php/crm/index/index',{
        type: 'year'
      })
      .then(res => {
        console.log(res)
        if(briefing.length <= 0){
            setbriefing(res.data.data)
        }
        console.log(briefing)
      })
      .catch(err => {
          console.error(err); 
      })

    return(
        <div className="no2_0_box">
            <div className="no2_0_top clearfix">
                <div className="no2_0_top_left">
                    <div className="no2_0_logo">
                        <img src={title} slt="logo"></img>
                    </div>
                    <div className="no2_0_name">本人以及下属</div>
                    <div className="no2_0_namefen"></div>
                    <div className="no2_0_type">切换</div>
                    <div className="no2_0_time">
                        <ConfigProvider locale={zhCN}>
                            <Cascader 
                            options={options} onChange={onChange}
                            allowClear={false}
                            style={{width:'200px',height:'31px'}}
                            placeholder="本年" />
                        </ConfigProvider>
                    </div>
                </div>
                <div className="no2_0_top_right">
                    <div className="no2_0_top_btn">
                        <ConfigProvider locale={zhCN}>
                            <Button type="primary"  onClick={showModal} style={{margin:0}}>
                                <span className="iconfont no2_0_content_title_txt_1">&#xe684;</span> 数据查重
                            </Button>
                            <Modal footer={null} width={700}  title="查重工具" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="客户" key="1">
                                        <div className="no2_0_top_item">
                                            <div className="no2_0_top_item_input clearfix">
                                                <div className="no2_0_top_item_input_box">
                                                    <p>客户名称</p>
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
                                                    <p>电话</p>
                                                    <div className="no2_0_top_item_input_box_box">
                                                        <input></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="no2_0_top_item_btn" onClick={error}>查询</div>
                                            <div className="no2_0_top_mask">
                                                <div className="mask_box">
                                                    <div className="mask_box_item">客户名称</div>
                                                    <div className="mask_box_item">负责人</div>
                                                </div>
                                                <div className="mask_content">
                                                    <p>暂无数据</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="联系人" key="2">
                                        <div className="no2_0_top_item">
                                        <div className="no2_0_top_item_input clearfix">
                                                <div className="no2_0_top_item_input_box">
                                                    <p>联系人</p>
                                                    <div className="no2_0_top_item_input_box_box">
                                                        <input></input>
                                                    </div>
                                                </div>
                                                <div className="no2_0_top_item_input_box">
                                                    <p>客户名称</p>
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
                                                    <p>电话</p>
                                                    <div className="no2_0_top_item_input_box_box">
                                                        <input></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="no2_0_top_item_btn" onClick={error}>查询</div>
                                            <div className="no2_0_top_mask">
                                                <div className="mask_box">
                                                    <div className="mask_box_item">姓名</div>
                                                    <div className="mask_box_item">客户名称</div>
                                                    <div className="mask_box_item">负责人</div>
                                                </div>
                                                <div className="mask_content">
                                                    <p>暂无数据</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="线索" key="3">
                                        <div className="no2_0_top_item">
                                            <div className="no2_0_top_item_input clearfix">
                                                <div className="no2_0_top_item_input_box">
                                                    <p>线索名称</p>
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
                                                    <p>电话</p>
                                                    <div className="no2_0_top_item_input_box_box">
                                                        <input></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="no2_0_top_item_btn" onClick={error}>查询</div>
                                            <div className="no2_0_top_mask">
                                                <div className="mask_box">
                                                    <div className="mask_box_item">线索名称</div>
                                                    <div className="mask_box_item">负责人</div>
                                                </div>
                                                <div className="mask_content">
                                                    <p>暂无数据</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </Modal>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
            <div className="no2_0_content clearfix">
                <div className="no2_0_content_item">
                    {/* 销售简报 */}
                    <div className="no2_0_content_item_title clearfix">
                        <p className="no2_0_content_title_txt">
                            <span className="iconfont no2_0_content_title_txt_2">&#xe63c;</span>销售简报
                        </p>
                    </div>
                    <div className="no2_0_content_item_list clearfix">
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l1one">
                                <span className="iconfont">&#xe68e;</span>
                                <span className="no2_0_content_item_list_txt">新增客户</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.customerNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l2one">
                                <span className="iconfont">&#xe627;</span>
                                <span className="no2_0_content_item_list_txt">新增联系人</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.contactsNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l3one">
                                <span className="iconfont">&#xe649;</span>
                                <span className="no2_0_content_item_list_txt">新增商机</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.businessNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l4one">
                                <span className="iconfont">&#xe615;</span>
                                <span className="no2_0_content_item_list_txt">阶段变化的商机</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.businessStatusNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l5one">
                                <span className="iconfont">&#xe622;</span>
                                <span className="no2_0_content_item_list_txt">新增合同</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.contractNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l6one">
                                <span className="iconfont">&#xe600;</span>
                                <span className="no2_0_content_item_list_txt">新增更进记录</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.recordNum}</div>
                        </div>
                        <div className="no2_0_content_item_list_li">
                            <div className="no2_0_content_item_list_li_left l7one">
                                <span className="iconfont">&#xe604;</span>
                                <span className="no2_0_content_item_list_txt">新增回款</span>
                            </div>
                            <div className="no2_0_content_item_list_num">{briefing.receivablesNum}</div>
                        </div>
                    </div>
                </div>
                <div className="no2_0_content_item">
                    {/* 业绩指标 */}
                    <div className="no2_0_content_item_title clearfix">
                        <p className="no2_0_content_title_txt">
                            <span className="iconfont no2_0_content_title_txt_2">&#xe66d;</span>业绩指标
                        </p>
                    </div>
                    <div className="no2_0_content_item_achievement">
                        <div className="no2_0_content_item_achievement_img">
                            <img src={imga} alt=""></img>
                        </div>
                        <div className="no2_0_content_item_achievement_content">
                            <div className="no2_0_content_item_achievement_content_item">
                                <p className="no2_0_content_item_achievement_content_txt">目标</p>
                                <p className="no2_0_content_item_achievement_content_num">0.00元</p>
                            </div>
                            <div className="no2_0_content_item_achievement_content_item">
                                <p className="no2_0_content_item_achievement_content_txt">合同金额</p>
                                <p className="no2_0_content_item_achievement_content_num">0.00元</p>
                            </div>
                            <div className="no2_0_content_item_achievement_content_item">
                                <p className="no2_0_content_item_achievement_content_txt">回款金额</p>
                                <p className="no2_0_content_item_achievement_content_num">0.00元</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="no2_0_content_item">
                    {/* 销售漏斗 */}
                    <div className="no2_0_content_item_title clearfix">
                        <p className="no2_0_content_title_txt">
                            <span className="iconfont no2_0_content_title_txt_2">&#xe6be;</span>销售漏斗
                        </p>
                    </div>
                    <div className="no2_0_content_item_sale clearfix">
                        <div className="no2_0_content_item_sale_txt">
                            <p className="no2_0_content_item_sale_txt_1">赢单：0元</p>
                            <p className="no2_0_content_item_sale_txt_2">输单：0元</p>
                        </div>
                        <div className="no2_0_content_item_sale_img">
                            <img src={imgb} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="no2_0_content_item">
                    {/* 销售趋势 */}
                    <div className="no2_0_content_item_title clearfix">
                        <p className="no2_0_content_title_txt">
                            <span className="iconfont no2_0_content_title_txt_2">&#xe613;</span>销售趋势
                        </p>
                    </div>
                    <div>
                       <Each></Each>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default No2_0





