import './no1_3_1.css'
import { Cascader } from 'antd';



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
                 <p>没有更多了</p>
                 
            </div>
        </div>
    )
}
export default App