import { Cascader, ConfigProvider, DatePicker, Space } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import { useState } from 'react'
import './no3_3_1.css'

function disabledDate(current) {

    return current < moment().subtract(29, 'years') || current > moment();
};


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
let No3_3_4 = function (params) {
    function onChange(value) {
        console.log(value);
    }

    const [options3, setoptions3] = useState([])
    axios.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue', {
        structure_id: 1
    })
        .then(res => {
            console.log(res)
            if (options3.length <= 0) {
                let arr = []
                for (let i = 0; i < res.data.data.length; i++) {
                    arr.push({
                        value: res.data.data[i].id,
                        label: res.data.data[i].realname
                    })
                }
                console.log(arr)
                setoptions3(arr)
            }

        })
        .catch(err => {
            console.error(err);
        })
    const [statistics, setstatistics] = useState([])
    axios.post('http://crm.cimns.com/index.php/bi/contract/summary', {
        structure_id: 1,
        type: 'year'
    })
        .then((data)=> {
            if (statistics.length <= 0) {
                setstatistics(data.data.data.items)
            }
            console.log(statistics)
        })
        .catch(err => {
            console.error(err);
        })
    return (
        <div className="no3_3_1_box">
            <div className="no3_3_1_box_top">
                <div className="no3_3_1_box_top_1">
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="year" placeholder="日期" disabledDate={disabledDate} />
                    </Space>
                </div>
                <div className="no3_3_1_box_top_2">
                    <ConfigProvider locale={zhCN}>
                        <Cascader
                            options={options2} onChange={onChange}
                            allowClear={false}
                            style={{ width: '120px', height: '31px' }}
                            placeholder="办公室" />
                    </ConfigProvider>
                </div>
                <div className="no3_3_1_box_top_3">
                    <ConfigProvider locale={zhCN}>
                        <Cascader
                            options={options3} onChange={onChange}
                            allowClear={false}
                            style={{ width: '120px', height: '31px' }}
                            placeholder="选择员工" />
                    </ConfigProvider>
                </div>
                <div className="no3_3_1_box_top_4">搜索</div>
            </div>
            <div className="no3_1_1_box_content_list">
            <div className="no3_1_1_box_content_list_top">
                        <div>日期</div>
                        <div>签约合同数(个)</div>
                        <div>签约合同金额(元)</div>
                        <div>回款金额(元)</div>
                    </div>
                <div className="no3_1_1_box_content_list_ciontent">
                    {statistics.map((item,index)=>{
                            return(
                                <div className="no3_1_1_box_content_list_ciontent_item" key ={index}>
                                    <div>{item.type}</div>
                                    <div>{item.count}</div>
                                    <div>{item.money}</div>
                                    <div>{item.back}</div>
                                </div>
                            )  
                        })}
                </div>
            </div>
        </div>
    )
}
export default No3_3_4
