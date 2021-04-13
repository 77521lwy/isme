import {useState} from 'react' 
import axios from 'axios'
import './no1_5_3.css'
import {Select,DatePicker,Space,Cascader} from 'antd';

function App() {
    const type=false
    const options3 = [
        {
            value: '全部',
            label: '全部',
          },
          {
            value: '日报',
            label: '日报',
          },
          {
              value: '周报',
              label: '周报',
            },
            {
              value: '月报',
              label: '月报',
            },
      ];
    const [lpoo,setlpoo] =useState([])
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
            if(lpoo.length <= 0){
                setlpoo(data.data.data)
            }
        }
        console.log(data.data.data)
    }, (err) => {
        console.log(err)
    })
    const { Option } = Select;

    function onChange2(value) {
    console.log(`selected ${value}`);
    }

    function onBlur() {
    console.log('blur');
    }

    function onFocus() {
    console.log('focus');
    }

    function onSearch(val) {
    console.log('search:', val);
    }
    return (
        <div className="no1_5_3_title">
                <ul className="no1_5_3_content">
                    <li>
                        <h3>发起人</h3>
                        <Select showSearch style={{ width: 100 }}  placeholder="请选择"  optionFilterProp="children"  onChange={onChange2}  onFocus={onFocus} onBlur={onBlur}  onSearch={onSearch}  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0  }>
                                {lpoo.map((item, index) => {
                                    return (
                                        <Option key={index} style={{ height: 41 }}>
                                            <span>{item.realname}</span>
                                        </Option>
                                    )
                                })}
                            </Select>
                        
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
                            <Cascader allowClear={type} options={options3} onChange={onChange1} placeholder="请选择" style={{width:100}}/>
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