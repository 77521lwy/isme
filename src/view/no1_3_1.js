import './no1_3_1.css'
import { Cascader } from 'antd';
import { useState } from 'react'
import axios from 'axios'



function App(){
    const type=false
    const options = [
        {
            code: '全部',
            name: '全部',
        },
        {
            code: '我负责的',
            name: '我负责的',
        },
        {
            code: '我创建的',
            name: '我创建的',
        },
        {
            code: '我参与的',
            name: '我参与的',
        },
    ]
    const options2 = [
        {
            code: '全部',
            name: '全部',
        },
        {
            code: '正在进行',
            name: '正在进行',
        },
        {
            code: '已完成',
            name: '已完成',
        },
    ]
    const options3 = [
        {
            code: '全部',
            name: '全部',
        },
        {
            code: '高',
            name: '高',
        },
        {
            code: '中',
            name: '中',
        },
        {
            code: '低',
            name: '低',
        },
        {
            code: '无',
            name: '无',
        },
    ]
    const options4 = [
        {
            code: '全部',
            name: '全部',
        },
        {
            code: '今天到期',
            name: '今天到期',
        },
        {
            code: '明天到期',
            name: '明天到期',
        },
        {
            code: '一周到期',
            name: '一周到期',
        },
        {
            code: '一个月到期',
            name: '一个月到期',
        },
    ]
    const [metask,setmetask] = useState([])
    axios.post('http://crm.cimns.com/index.php/oa/task/myTask',{
        type: '',
        status: 1,
        priority: 'all',
        time: '',
        subUser: '',
        limit: 15,
        page: 1
    })
    .then(res => {
        // console.log(res.data.data.list)
        if(metask.length <=0){
            setmetask(res.data.data.list)
        }
        // console.log(metask)
    })
    .catch(err => {
        console.error(err); 
    })

    function add0(m){return m<10?'0'+m:m }
    function timestampToString(shijianchuo){
        var time = new Date(shijianchuo);
        var m = time.getMonth()+1;
        var d = time.getDate();
        return add0(m)+'-'+add0(d);
    } 
     return(
        <div>   
            <div className="no1_3_1_title">
                <input type="text" placeholder="搜索人物名称" className="no1_3_1_input"></input>
                <div>
                <ul>
                    <li>任务类型</li>
                    <li>
                    <Cascader allowClear={type} fieldNames={{ label: 'name', value: 'code'}} options={options} placeholder="全部"/>
                    </li>
                    <li>状态</li>
                    <li>
                        <Cascader allowClear={type} fieldNames={{ label: 'name', value: 'code'}} options={options2} placeholder="全部"/>
                    </li>
                    <li>优先级</li>
                    <li>
                        <Cascader allowClear={type} fieldNames={{ label: 'name', value: 'code'}} options={options3} placeholder="全部"/>
                    </li>
                    <li>截止时间</li>
                    <li>
                        <Cascader allowClear={type} fieldNames={{ label: 'name', value: 'code'}} options={options4} placeholder="全部"/>
                    </li>
                </ul>
                </div>
            </div>
            <div className="no1_3_1_content">
                 {(function(){
                     if(metask === ''){
                        return <p>没有更多了</p>
                     }
                 })()}
                 {
                    metask.map((item,index)=>{
                        return(
                            <div key={index} className="metask_item clearfix">
                                <p className="metask_name">{item.task_name}</p>
                                <div className="metask_imgbox">
                                    {(function(){
                                        if(item.stop_time === 0){
                                            return 
                                        }
                                        else{
                                            return(
                                                <div className="metask_endtime">
                                                    <span className="iconfont">
                                                    &#xe66d;
                                                    </span>
                                                    {timestampToString(item.stop_time*1000)}
                                                    截止
                                                </div>
                                            )
                                        }
                                    })()}
                                    <div className="metask_img">
                                        <img src={item.main_user.img} alt='' title={item.main_user.realname}>
                                        </img>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default App