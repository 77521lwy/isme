import './no1_5_2.css'
import {DatePicker,Space,Cascader} from 'antd';

function App() {
    const type=false
    const options2 = [
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
                            <Cascader allowClear={type} options={options2} onChange={onChange1} placeholder="请选择" style={{width:100}}/>
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