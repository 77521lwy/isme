import React,{useState,useEffect} from 'react'
import './no1_4.css' 
import { Cascader } from 'antd';
import { Modal, Button } from 'antd';
import wu from '../images/wu.png'
import axios from 'axios'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
const options = [
    {
      value: '1',
      label: '公示中',
    },
    {
      value: '2',
      label: '已结束',
    },
  ];
  
  
function App(props){
    const [announcementlist,setannouncementlist] = useState([])
    const [announcementlist2,setannouncementlist2] = useState([])
    const [activelist,ustactivelist] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(function(){
        ustactivelist(announcementlist)
    },[props])
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
        if(value == 1){
            ustactivelist(announcementlist)
        }
        else if(value == 2){
            ustactivelist(announcementlist2)
        }
        // console.log(value);
        
    }
    axios.post('http://crm.cimns.com/index.php/oa/announcement/index',{
        type: 1,
        page: 1,
        limit: 15
    })
    .then(res => {
        if(announcementlist.length <=0){
            setannouncementlist(res.data.data)
        }
        // console.log(announcementlist)
    })
    axios.post('http://crm.cimns.com/index.php/oa/announcement/index',{
        type: 2,
        page: 1,
        limit: 15
    })
    .then(res => {
        if(announcementlist2.length <=0){
            setannouncementlist2(res.data.data)
        }
        // console.log(announcementlist2)
    })
    console.log(activelist)
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
                    {(function(){
                        if(activelist.list == ''){
                            return (<p className="no1_4_text_txtxt">木有更多</p>)
                        }
                        else if(activelist == ''){
                            return (<p className="no1_4_text_txtxt">木有更多</p>)
                        }
                        else{
                            return(
                                <div>
                                    {activelist.list.map((item,index)=>{
                                        return(
                                            <div key={index} className="item_no1_1_1">
                                                <div className='item_img'>
                                                    <img alt="管理" src={item.thumb_img===''?wu:item.thumb_img}></img>
                                                </div>
                                                <div className="item_txt">
                                                    <div className="text_top">
                                                        <p className="txt_name">{item.realname}</p>
                                                    </div>
                                                    <p className="item_time">{getTime(item.create_time*1000)}</p>
                                                    <p>{item.title}</p>
                                                    <div className="item_slo">{item.content}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}
export default App