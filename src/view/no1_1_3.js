import axios from 'axios'
import {useState} from 'react'
import './no1_1_1.css'
import wu from '../images/wu.png'

function App(){
    
    const [list,setlist] = useState([])
    axios.post('http://crm.cimns.com/index.php/oa/index/index',{
        type:5,
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
    function getTime(data,type){
        var _data = data;
        //如果是13位正常，如果是10位则需要转化为毫秒
        if (String(data).length ===13) {
          _data = data
        } else {
          _data = data*1000
        }
        const time = new Date(_data);    
        const Y = time.getFullYear();
        const Mon = time.getMonth() + 1;
        const Day = time.getDate();
        const H = time.getHours();
        const Min = time.getMinutes();
        const S = time.getSeconds();
        //自定义选择想要返回的类型
        if(type==="Y"){
          return `${Y}-${Mon}-${Day}`
        }else if(type==="H"){
          return `${H}:${Min}:${S}`
        }else{
          return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`
        }
      }
    return(
        <div>
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
                                    <p className="txt_type"><span className="iconfont type_a">&#xe695;</span> {item.type_name}</p>
                                </div>
                                <p className="item_time">{getTime(item.create_time)}</p>
                                <div className="item_slo">{item.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default App