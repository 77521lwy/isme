import React, { useState } from 'react';
import { Drawer, Form,} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import './shnepi.css'
import wu from '../images/wu.png'



moment.locale('zh-cn');

function App(porps){
    function happenTimeFun(num){//时间戳数据处理
		let date = new Date(num*1000);
		 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;//月补0
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;//天补0
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;//小时补0
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;//分钟补0
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;//秒补0
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
    }

    console.log(porps.num)
    const [itena,setitena] = useState([])
    // 数据接口
    axios.post('http://crm.cimns.com/index.php/oa/examine/read',{
        id:porps.us.action_id
    })
    .then(res => {
        console.log(res)
        if(itena.length<=0){
            setitena(res.data.data)
        }
    })
    .catch(err => {
        console.error(err); 
    })
    const [itenb,setitenb] =useState([])
    axios.post('http://crm.cimns.com/index.php/admin/examine_flow/stepList',{
        types: 'oa_examine',
        flow_id: porps.us.action_id ,
        types_id: porps.us.action_id,
        action: 'view'
    }).then((res)=>{
        if(itenb.length <= 0){
            setitenb(res.data.data.stepList)
        }
        console.log(itenb)
    })
    const [state,setState] = useState({ visible: false })
    const showDrawer = (index) => {
      setState({
        visible: true,
      })
    };
    const onClose = () => {
      setState({
        visible: false,
      });
    };
    return (
    <div>
        <p style={{margin:'0px'}} onClick={()=>{showDrawer(porps.us.examine_id)}}> {porps.us.title} </p>
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
                {(function(){
                    if(itena.type_id){
                        return <p> <span>请假类型</span>{itena.type_id}</p>
                    }
                })()}
                {(function(){
                    if(itena.content){
                        return <p> <span>请假类型</span>{itena.content}</p>
                    }
                })()}
                {(function(){
                    if(itena.end_time){
                        return <p> <span>开始时间</span>{happenTimeFun(itena.create_time)} </p>
                    }
                })()}
                {(function(){
                    if(itena.end_time){
                        return  <p> <span>结束时间</span>{happenTimeFun(itena.end_time)} </p>

                    }
                })()}
                {(function(){
                    if(itena.type_id){
                        return <p> <span>时长(天)</span> 1 </p>
                    }
                })()}
                {(function(){
                    if(itena.remark){
                        return <p> <span>备注</span>{itena.remark} </p>
                    }
                })()}
            </div>
            <div className="plosb">
                <h3>审核信息</h3>
                <div className="plosb_title clearfix">
                    <div className="plosb_title_title">查看审批历史</div>
                    <div className="plosb_title_btn">撤回审批</div>
                </div>
                <div className="plosb_content">
                    {itenb.map((item,index)=>{
                        return(
                            <div className="create_item">
                                <div className="aasdfwertyuiop">
                                    <img src={item.userInfo.img===''?wu:item.userInfo.img} alt="创建人"></img>
                                </div>
                                {/* item.userInfo.img===''?wu:item.userInfo.img */}
                                <span> {item.userInfo.realname}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Form>
        </Drawer>
    </div>
    )
};

export default App