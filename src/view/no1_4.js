import React,{useState} from 'react'
import './no1_4.css' 
import { Cascader } from 'antd';
import { Modal, Button } from 'antd';
import axios from 'axios'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
const options = [
    {
      value: '公示中',
      label: '公示中',
    },
    {
      value: '已结束',
      label: '已结束',
    },
  ];
  
  
function App(){
    axios.post('http://crm.cimns.com/index.php/oa/announcement/index',).then((data)=>{
        console.log(data)
    })
    const [isModalVisible, setIsModalVisible] = useState(false);
    const  type = false
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    function onChange(value) {
        console.log(value);
      }
    return(
        <div className="no1_4_main">
            <div className="no1_4_top">
                <div className="no1_4_left">公告</div>
                <div className="no1_4_btna clearfix">
                    <Button type="primary" onClick={showModal} style={{margin:'0px'}}>
                        新建公告
                    </Button>
                    <Modal title="新建公告" okText="取消" cancelText="确认" className="clearfix" maskStyle={{background:'rgba(255,255,255,.99)'}}  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div className="no1_4_one">
                            <h3 className="no1_4_one_q">公告标题</h3>
                            <input className="no1_4_one_z"></input>
                        </div>
                        <div className="no1_4_one">
                            <h3 className="no1_4_one_q">通知部门</h3>
                            <input className="no1_4_one_z"></input>
                        </div>
                        <div className="no1_4_one">
                            <h3 className="no1_4_one_q">开始时间</h3>
                            <input className="no1_4_one_z"></input>
                        </div>
                        <div className="no1_4_one">
                            <h3 className="no1_4_one_q">结束时间</h3>
                            <input className="no1_4_one_z"></input>
                        </div>
                        <div className="no1_4_two">
                            <h3 className="no1_4_title">公告正文</h3>
                            <textarea className="no1_4_co"></textarea>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="no1_4_conent">
                <div className="no1_4_text_top">
                    <label>公告状态</label>
                    <Cascader options={options} allowClear={type}  onChange={onChange} placeholder="公示中" />
                </div>
                <div className="no1_4_text">
                    <p>没有更多了</p>
                </div>
            </div>
        </div>
    )
}
export default App