import {useState} from 'react' 
import axios from 'axios'
import './no1_5_3.css'
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
    const [lolpp,setlolpp] =useState([])
    function handleChange(value) {
        console.log(value);
    }
    
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    function onChange1(value) {
        console.log(value);
      }
    axios.post('http://crm.cimns.com/index.php/admin/users/getUserList').then((data) => {
        if (data.data.code === 101) {
            console.log(data.data.arr)
        }
        else{ 
            if(lolpp.length <= 0){
                setlolpp(data.data.data)
            }
        }
        console.log(data.data.data)
    }, (err) => {
        console.log(err)
    })
    return (
        <div className="no1_5_3_title">
                <ul className="no1_5_3_content">
                    <li>
                        <h3>发起人</h3>
                        <div>
                            <Select labelInValue defaultValue={{ value: '请选择' }} style={{ width: '100%', height: 35 }} onChange={handleChange}>
                                {lolpp.map((item, index) => {
                                    return (
                                        <p key={index} style={{ height: 41 }}>
                                            <span>{item.realname}</span>
                                        </p>
                                    )
                                })}
                            </Select>
                        </div>
                        
                    </li>
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
                <div className="no1_5_3_bottom">
                    <div>没有更多了</div>
                </div>
        </div>
    )
}
export default App