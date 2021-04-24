import axios from 'axios'
import {useState} from  'react'
import { Tabs } from 'antd';
import { Cascader ,ConfigProvider  } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import losp from '../images/xaizai.png'
import losp2 from '../images/xaizai2.png'
import img from "../images/download.png"
const { TabPane } = Tabs;

const options2 = [
    {
        value: '1',
        label: '全部',
    }

  ];

function No4_2(props){
    function callback(key) {
        console.log(key);
      }
    const [projectlist,setproject] = useState([])
    axios.post("http://crm.cimns.com/index.php/work/index/workList").then(
        (res)=>{
            if(projectlist.length<=0){
                setproject(res.data.data)
            }
        }
    )
    console.log(props)
    function onChange(value) {
        console.log(value);
    }   
    return(
    <div className="no4_2">
        <div className="no4_2_title">
            <div className="no4_2_top clearfix">
                {projectlist.map((item,index)=>{
                    if(index == props.match.params.id){
                        return(
                            <div className="no4_2_top_name" key={index}>
                                <span className="iconfont sp1">&#xe628;</span>
                                {item.name} 
                                <span className="iconfont sp2">&#xe609;</span>
                            </div>
                        )
                    }
                })}
                <div className="no4_2_top_right">
                    <span className="iconfont">&#xe611;</span>
                    <span className="iconfont">&#xe6be;</span>
                </div>
            </div>
            <div className="no4_2_nav">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="任务板" key="1">
                    <div className="swhulskad">
                    <div className="no4_1_1_content clearfix">
                        <div className="no4_1_1_content_item">
                            <div className="no4_1_1_content_item_title">
                                <div className="no4_1_1_content_item_name">要做</div>
                                <p className="no4_1_1_content_item_num"> <span>0</span>/<span>1</span> </p>
                            </div>
                            <div className="no4_1_1_content_item_fen"></div>

                            <div className="no4_1_1_content_item_push"><span className="iconfont">+</span>新建任务</div>
                        </div>
                        
                        <div className="no4_1_1_content_item">
                            <div className="no4_1_1_content_item_title">
                                <div className="no4_1_1_content_item_name">在做</div>
                                <p className="no4_1_1_content_item_num"> <span>0</span>/<span>1</span> </p>
                            </div>
                            <div className="no4_1_1_content_item_fen"></div>

                            <div className="no4_1_1_content_item_push"><span className="iconfont">+</span>新建任务</div>
                        </div>
                        <div className="no4_1_1_content_item">
                            <div className="no4_1_1_content_item_title">
                                <div className="no4_1_1_content_item_name">待定</div>
                                <p className="no4_1_1_content_item_num"> <span>0</span>/<span>1</span> </p>
                            </div>
                            <div className="no4_1_1_content_item_fen"></div>

                            <div className="no4_1_1_content_item_push"><span className="iconfont">+</span>新建任务</div>
                        </div>
                    </div>

                    </div>
                    </TabPane>
                    <TabPane tab="附件" key="2">
                    <div className="swhulskad">
                        <div className="no4_2_item">
                            <div className="no4_2_item_1">
                                <div className="no4_2_item_1_top">
                                    <div>附件名称</div>
                                    <div>附件大小</div>
                                    <div>上传人</div>
                                    <div>上传时间</div>
                                    <div>操作</div>
                                </div>
                                <div className="no4_2_item_1_content">
                                    <p>
                                        暂无数据
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tab="任务统计" key="3">
                    <div className="swhulskad">
                        <div className="No4_3_box_content_item">  
                            <div className="No4_3_box_content_item_title clearfix">
                                <div className="No4_3_box_content_item_title_left">任务总览</div>
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
                        <div className="twobox clearfix">
                            <div className="onebox">
                                <h3 className="onebox_title">任务列表</h3>
                                <div className="onebox_content">
                                    <img src={losp}></img>
                                </div>
                            </div>
                            <div className="onebox">
                                <h3 className="onebox_title">标签分析</h3>
                                <div className="onebox_content">
                                    <img src={losp2}></img>
                                </div>
                            </div>
                        </div>
                        <div className="listbox">
                            <h3 className="onebox_title">任务列表</h3>
                            <div className="listbox_title">
                                <div className="listbox_title_top">
                                    <div>姓名</div>
                                    <div>任务总数</div>
                                    <div>已完成数</div>
                                    <div>未完成数</div>
                                    <div>逾期数</div>
                                    <div>完成率</div>
                                </div>
                                <div className="listbox_title_content">
                                    <div className="listbox_title_content_item">
                                        <div>管理员</div>
                                        <div>--</div>
                                        <div>--</div>
                                        <div>--</div>
                                        <div>--</div>
                                        <div>--</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tab="归档任务" key="4">
                    <div className="swhulskad">
                    <div className="no4_4_box_content">
                <div className="htisiskasjdjhg_img"><img src={img} alt="shixiang"></img></div>
            </div>
                    </div>
                    </TabPane>
                </Tabs>

            </div>
        </div>
    </div>
    )
}


export default No4_2