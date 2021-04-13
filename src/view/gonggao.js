import React, { useState } from 'react';
import { ConfigProvider,} from 'antd';
import { Modal,} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

function App(porps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    function getTime(num){//时间戳数据处理
		let date = new Date(num*1000);
		 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;//月补0
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;//天补0
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;//小时补0
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;//分钟补0
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;//秒补0
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
    }
  return (
    <ConfigProvider locale={zhCN}>
      <p onClick={showModal} className="pptlsiasdvhasd">{porps.up.title}</p>
      <Modal title='公告详情' width={700} footer={null} visible={isModalVisible} onCancel={handleCancel}>
        <h3 className="asdgjdssjagd_title">{porps.up.title}</h3>
        <p className="asdgjdssjagd_time">{getTime(porps.up.create_time)}</p>
        <div className="asdgjdssjagd_content">
            {porps.up.ann_content}
        </div>
</Modal>
    </ConfigProvider>
  );
};

export default App