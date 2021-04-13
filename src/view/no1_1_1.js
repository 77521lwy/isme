import axios from 'axios'
import {useState} from 'react'
import './no1_1_1.css'
import wu from '../images/wu.png'

function App(){
    
    const [list,setlist] = useState([])
    axios.post('http://crm.cimns.com/index.php/oa/index/index',{
        type:0,
        page:1,
        limit:15
    }).then((data)=>{
        if(data.data.code === 101){
            console.log(data.data.error)
        }else{
            if(list.length <=0){
                setlist(data.data.data.list)
            }
        }
        console.log(data)
    },(err)=>{
        console.log(err)
    })
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
        <div>
                {list.map((item,index)=>{
                    return(
                        <div key={index} className="item_no1_1_1">
                            <div className='item_img'>
                                <img alt="管理" src={item.create_user_info.img===''?wu:item.create_user_info.img}></img>
                            </div>
                            <div className="item_txt">
                                <div className="text_top">
                                    <p className="txt_name">{item.create_user_info.realname}</p>
                                    <p className="txt_content">{item.content}</p>
                                    <p className="txt_type"><span className="iconfont type_b">&#xe622;</span> {item.type_name}</p>
                                </div>
                                <p className="item_time">{getTime(item.create_time)}</p>
                                <div className="item_slo">{item.title}</div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default App