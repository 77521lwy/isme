import { Cascader,DatePicker, Space,ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');
function App(){
    const options = [
        {
          value: "待我审批的",
          label: "待我审批的",
        },
        {
          value: '我已审批的',
          label: '我已审批的',
        }
      ];
      
      function onChange(value) {
        console.log(value);
      }
      const type=false
      const { RangePicker } = DatePicker;

    return(
        <div>
            <div className="no1_6_1_nav">
              <div className="no1_6_1_nav_item">
                  <h3>审核状态</h3>
                  <Cascader allowClear={type} options={options} onChange={onChange} placeholder="待我审批的" />
              </div>
              <div className="no1_6_1_nav_item">
                  <h3>发起时间</h3>
                  <div>
                      <ConfigProvider locale={zhCN}>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                        </Space>  
                      </ConfigProvider>  
                  </div>
              </div>
            </div>
        </div>
    )
}
export default App