import { Cascader ,ConfigProvider  } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import { useState } from 'react'

const options2 = [
    {
        value: '1',
        label: '全部',
    }

  ];

function No4_3(){
    function onChange(value) {
        console.log(value);
    }   
    return(
        <div className="No4_3_box">
            <h3 className="No4_3_box_title">统计分析</h3>
            <div className="No4_3_box_content">
                <div className="No4_3_box_content_item">  
                    <div className="No4_3_box_content_item_title clearfix">
                        <div className="No4_3_box_content_item_title_left">任务总览</div>
                        <div className="No4_3_box_content_item_title_right">
                            <div className="no3_1_1_box_top_2">
                                <ConfigProvider locale={zhCN}>
                                    <Cascader 
                                    options={options2} onChange={onChange}
                                    allowClear={false}
                                    style={{width:'200px',height:'31px'}}
                                    placeholder="全部" />
                                </ConfigProvider>
                            </div>
                        </div>
                    </div>
                    <div className="No4_3_box_content_item_title_content">
                        <div className="No4_3_box_content_item_title_content_left">
                            <div className="No4_3_box_content_item_title_content_left_item">
                                <p className="No4_3_box_content_item_title_content_left_txt">完成率</p>
                                <p className="No4_3_box_content_item_title_content_left_txt_num">0%</p>
                            </div>
                            <div className="No4_3_box_content_item_title_content_left_item">
                                <p className="No4_3_box_content_item_title_content_left_txt">逾期率</p>
                                <p className="No4_3_box_content_item_title_content_left_txt_num">0%</p>
                            </div>
                        </div>
                        <div className="No4_3_box_content_item_title_content_right">
                            <div className="No4_3_box_content_item_title_content_right_item">
                                <div className="No4_3_box_content_item_title_content_right_top ces">
                                    <div>
                                        0
                                    </div>
                                    <div>
                                        0
                                    </div>
                                    <div>
                                        0
                                    </div>
                                    <div>
                                        0
                                    </div>
                                    <div>
                                        0
                                    </div>
                                </div>
                                <div className="No4_3_box_content_item_title_content_right_top">
                                    <div>
                                        总任务
                                    </div>
                                    <div>
                                        未完成
                                    </div>
                                    <div>
                                        已完成
                                    </div>
                                    <div>
                                        已逾期
                                    </div>
                                    <div>
                                        已归档
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="No4_3_box_content_item">
                    <div className="No4_3_box_content_item_title clearfix">
                        <div className="No4_3_box_content_item_title_left">成员完成情况</div>
                    </div>
                    <div className="No4_3_box_content_item_biaog">
                        <div className="No4_3_box_content_item_biaog_top">
                            <div className="No4_3_box_content_item_biaog_top_item">姓名</div>
                            <div className="No4_3_box_content_item_biaog_top_item">任务总数</div>
                            <div className="No4_3_box_content_item_biaog_top_item">已完成数</div>
                            <div className="No4_3_box_content_item_biaog_top_item">未完成数</div>
                            <div className="No4_3_box_content_item_biaog_top_item">预期数</div>
                            <div className="No4_3_box_content_item_biaog_top_item">完成率</div>
                        </div>
                        <div className="No4_3_box_content_item_biaog_content">
                            <p className="No4_3_box_content_item_biaog_content_txtt">暂无数据</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default No4_3