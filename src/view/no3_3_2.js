import { Cascader, ConfigProvider, DatePicker, Space } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'
import { useState } from 'react'
import './no3_3_1.css'
import Eachsa from './each3_3_1'

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
let No3_3_2 = function (params) {
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
    axios.post('http://crm.cimns.com/index.php/bi/contract/analysis', {
        structure_id: 1,
        year: 2021,
        type: 'count'
    })
        .then(res => {
            if (statistics.length <= 0) {
                setstatistics(res.data.data)
            }
            console.log(res.data.data)
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
            <div className="no3_3_1_box_content">
                <div className="no3_3_1_box_content_biao">
                    {/* 组件 */}
                    <Eachsa></Eachsa>
                </div>
                <div className="no3_3_1_box_content_list">
                    <div className="no3_3_1_box_content_list_top">
                        <div className="no3_3_1_box_content_left_content">
                            <div>日期</div>
                            <div>当月合同数量(元)</div>
                            <div>上月合同数量(元)</div>
                            <div>去年当月合同数量(元)</div>
                            <div>环比增长(%)</div>
                            <div>同比增长(%)</div>
                        </div>
                        <div className="no3_3_1_box_content_left_content_1">
                            {statistics.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            {item.type}
                                        </div>
                                        <div>
                                            {item.month}
                                        </div>
                                        <div>
                                            {item.chain_ratio}
                                        </div>
                                        <div>
                                            {item.lastMonth}
                                        </div>
                                        <div>
                                            {item.lastYeatMonth}
                                        </div>
                                        <div>
                                            {item.year_on_year}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default No3_3_2
