import {useState} from 'react' 
import axios from 'axios'
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
        <div>
            <div>
                <ul>
                    <li>
                        <h3>发起人</h3>
                        <Select labelInValue defaultValue={{ value: '请选择' }} style={{ width: '10%', height: 41 }} onChange={handleChange}>
                            {lolpp.map((item, index) => {
                                return (
                                    <div key={index} style={{ height: 41 }}>
                                        <p>{item.realname}</p>
                                    </div>
                                )
                            })}
                        </Select>
                    </li>
                    <li>
                        <h3>提交时间</h3>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                        </Space>
                    </li>
                    <li>
                        <h3>类型</h3>
                        <Cascader options={options} onChange={onChange1} placeholder="Please select" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default App