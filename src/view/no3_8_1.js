import { Cascader ,ConfigProvider  } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import { useState } from 'react'

import Eachsa from './each3'

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
  const options2 = [
    {
        value: '1',
        label: '办公室',
    },
    {
        value: '2',
        label: '打杂部',
    }
  ];
let No3_8_1=function(params){
    function onChange(value) {
        console.log(value);
    }
    
    const [options3,setoptions3] = useState([])
    axios.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
        structure_id: 1
    })
    .then(res => {
        console.log(res)
        if(options3.length <=0){
            let arr = []
            for (let i = 0; i < res.data.data .length; i++){
                arr.push({
                    value: res.data.data[i].id,
                    label:res.data.data[i].realname
                })
            }
            console.log(arr)
            setoptions3(arr)
        }
        
    })
    .catch(err => {
        console.error(err); 
    })
    const [statistics,setstatistics] =useState({})
    const [thisptlo,setthisptlo] = useState([])
    axios.post('http://crm.cimns.com/index.php/bi/achievement/statistics',{
        year: 2021,
        status: 1,
        structure_id: 1
    })
    .then(res => {
        if(JSON.stringify(statistics) === '{}'){
            setstatistics(res.data.data)
            let arr = []
            for (const index in res.data.data) {
                arr.push(index)
            }
            console.log(arr)
            setthisptlo(arr)
        }
        console.log(res.data.data)
    })
    
    .catch(err => {
        console.error(err); 
    })
    console.log(statistics)
    return(
        <div className="no3_1_1_box">
            <div className="no3_1_1_box_top">
                <div className="no3_1_1_box_top_1">
                    <ConfigProvider locale={zhCN}>
                        <Cascader 
                        options={options} onChange={onChange}
                        allowClear={false}
                        style={{width:'200px',height:'31px'}}
                        placeholder="本年" />
                    </ConfigProvider>
                </div>
                <div className="no3_1_1_box_top_2">
                    <ConfigProvider locale={zhCN}>
                        <Cascader 
                        options={options2} onChange={onChange}
                        allowClear={false}
                        style={{width:'120px',height:'31px'}}
                        placeholder="办公室" />
                    </ConfigProvider>
                </div>
                <div className="no3_1_1_box_top_3">
                    <ConfigProvider locale={zhCN}>
                        <Cascader 
                        options={options3} onChange={onChange}
                        allowClear={false}
                        style={{width:'120px',height:'31px'}}
                        placeholder="选择员工" />
                    </ConfigProvider>
                </div>
                <div className="no3_1_1_box_top_4">搜索</div>
            </div>
            <div className="no3_1_1_box_content">
                <div className="no3_1_1_box_content_biao">
                    {/* 组件 */}
                    <Eachsa></Eachsa>
                </div>
                <div className="no3_1_1_box_content_list">
                    <div className="no3_1_1_box_content_list_top">
                        <div>时间</div>
                        <div>合同金额（元）</div>
                        <div>目标（元）</div>
                        <div>完成率（%）</div>
                    </div>
                    <div className="no3_1_1_box_content_list_ciontent">
                       {thisptlo.map((item,index)=>{
                           return(
                               <div className="no3_1_1_box_content_list_ciontent_item" key={index}>
                                  <div>{statistics[item].month}</div> 
                                  <div>{statistics[item].rate}</div> 
                                  <div>{statistics[item].rate}</div> 
                                  <div>{statistics[item].rate}</div> 
                               </div>
                           )
                       })}
                           {/* {statistics.map((item,index)=>{
                            return(
                                <div className="no3_1_1_box_content_list_ciontent_item" key ={index}>
                                    <div>{index}</div>
                                    <div>{item.user_name}</div>
                                    <div>{item.structure_name}</div>
                                    <div>{item.money}</div>
                                </div>
                            )  
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default No3_8_1
