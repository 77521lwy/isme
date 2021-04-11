import axios from 'axios'
import {useState} from 'react'
import './no1_1_1.css'
import wu from '../images/wu.png'

function App(){
    
    const [list,setlist] = useState([])
    axios.post('http://crm.cimns.com/index.php/oa/index/index',{
        type:1,
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
                        <div key={index} className="item_no1_1_2">
                            <div className='item_img'>
                                <img alt="管理" src={item.create_user_info.img===''?wu:item.create_user_info.img}></img>
                            </div>
                            <div className="item_txt">
                                <div className="text_top">
                                    <p className="txt_name">{item.create_user_info.realname}</p>
                                    <p className="txt_content">{item.content}</p>
                                </div>
                                <p className="item_time">{getTime(item.create_time)} <span>0个部门，0个同事</span> </p>
                            </div>
                            <div className="rew">
                                {(function a(){if(item.content === ''){return  }else{return (<p><span>今日工作内容：</span>{item.content}</p>)}})()}
                                {(function b(){if(item.tomorrow === ''){return  }else{return (<p><span>明日工作内容：</span>{item.tomorrow}</p>)}})()}
                            </div>
                            {(function(){
                                if(item.replyList===''){
                                    return 
                                }
                                else{
                                    return(
                                        <div className="itewm">
                                {item.replyList.map((ia,is)=>{
                                    return(
                                        <div key={is} className="no1_1_2_ala">
                                            <div className="no1_1_2_alo">
                                                <div className="soml_img">
                                                    <img src={ia.userInfo.thumb_img===''?wu:ia.userInfo.thumb_img}></img>
                                                    
                                                </div>
                                                <p className="soml_name"> {ia.realname} </p>
                                                <p className="soml_time"> {getTime(item.create_time) } </p>
                                            </div>
                                            <p className="no1_1_1_sa"> {ia.content} </p>
                                            {ia.replyList.map((iaw,isw)=>{
                                                    return(
                                                        <div key={isw} className="no_1_1_1_1">
                                                            <div className="no1_1_1_ppq">
                                                                <div className="soml_img">
                                                                    <img src={iaw.userInfo.thumb_img===''?wu:iaw.userInfo.thumb_img}></img>
                                                                </div>
                                                                <p className="soml_name"> {isw.realname} </p>
                                                                <p className="soml_time"> {getTime(item.create_time) } </p>
                                                                {(function aaa(){if(iaw.realname === ''){return  }else{return (<p className="soml_name_q"> 回复   <span>@</span> {ia.realname} ： <span> {iaw.content} </span> </p>)}})()}
                                                            </div>  
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    )
                                })}
                            </div>  
                                    )
                                }
                            })()}
                            <div className="no1_1_2_message">
                                <div className="btn_message" ><span className="iconfont">&#xe6a8;</span>留言</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default App