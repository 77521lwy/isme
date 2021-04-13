
import { Cascader,DatePicker, Space,ConfigProvider } from 'antd';



import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');
function App(){
    const options = [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '待审',
          label: '待审',
        },
        {
            value: '审批中',
            label: '审批中',
          },
          {
            value: '通过',
            label: '通过',
          },
          {
            value: '失败',
            label: '失败',
          },
          {
            value: '撤回',
            label: '撤回',
          },
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
                  <Cascader allowClear={type} options={options} onChange={onChange} placeholder="全部" />
              </div>
              <div className="no1_6_1_nav_item">
                  <h3>发起时间</h3>
                  <div>
                  <ConfigProvider locale={zhCN}>
                    <Space direction="vertical" size={12}>
                        <RangePicker />
                    </Space>  
                  </ConfigProvider></div> 
              </div>
            </div>
        </div>
    )
}
export default App