import axios from 'axios'
import wu from '../images/wu.png'
import React,{useState} from 'react'


function No4_6(){
    const [dellist,setDellist] = useState([])
    axios.post('http://crm.cimns.com/index.php/work/trash/index').then(
        (data)=>{
            if(dellist.length<=0){
                setDellist(data.data.data.list)
            }
            console.log(data.data.data.list)
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
        return  MM + '-' + d 
    }
    return(
        <div className="no4_6_box">
            <h3 className="no4_6_box_title">回收站</h3>
            <div className="no4_6_box_content">
                {dellist.map((item,index)=>{
                    return(
                        <div className="no4_6_box_content_item clearfix" key={index}>
                            <div className="no4_6_box_content_item_lwft">{item.name}</div>
                            <div className="no4_6_box_content_item_right">
                                <div className="no4_6_box_content_item_deltime">{getTime(item.stop_time)} 截止</div>
                                <div className="logo_no4_6_box_content_item">
                                    {/* item.thumb_img===''?wu:item.thumb_img */}
                                    <img src={item.thumb_img===''?wu:item.thumb_img} alt="logo" ></img>
                                </div>
                            </div>                       
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default No4_6