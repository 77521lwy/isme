import {useState} from 'react' 
import axios from 'axios'
import './no1_5_2.css'
import {Select,DatePicker,Space,Cascader} from 'antd';

function App() {
    const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
        },
      ];
    
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    function onChange1(value) {
        console.log(value);
      }
    return (
        <div className="no1_5_2_title">
                <ul className="no1_5_2_content">
                    <li>
                        <h3>提交时间</h3>
                        <div>
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />
                            </Space>
                        </div>
                        
                    </li>
                    <li>
                        <h3>类型</h3>
                        <div>
                            <Cascader options={options} onChange={onChange1} placeholder="请选择" style={{width:100}}/>
                        </div>
                    </li>
                </ul>
                <div className="no1_5_2_bottom">
                    <div>没有更多了</div>
                </div>
        </div>
    )
}
export default App