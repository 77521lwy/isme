
import './no1_7_1.css'
import axios from 'axios'
import { useState } from 'react'

function App() {
    const [liataa,setlistaa] = useState({})
    const [typt,settypt] = useState(true)
    axios.post('http://crm.cimns.com/index.php/oa/addresslist/index',{
     type:1
    })
    .then(res => {
        if(typt){
            setlistaa(res.data.data)
            settypt(false)
            ap()
        }
        console.log(res.data.data)
    })
    .catch(err => {
        console.error(err); 
    })
    const [a,seta] = useState([])
    function ap(){
        let arr = []
        for (const type in liataa) {
            arr.push(type)
        }
        console.log(arr)
        seta(arr)
    }
    return (
        <div>
            {/* 工作台71 */}
            <div> <input type="text" className="no1_7_width" placeholder="搜索成员  " ></input></div>
            <div className="no1_7_div">
                {a.map((item,index)=>{
                    return (
                        <div key={index}>
                            <h3>{item}</h3>
                            {liataa[item].map((itema,indexa)=>{
                                return(
                                    <div key={indexa}>
                                        <div className="no1_7_realname ">{itema.realname}</div>
                                        <div className="no1_7_ziti">
                                            <div> <span className="iconfont">&#xe637;</span>{itema.structure_name}</div>
                                            <div><span className="iconfont">&#xe617;</span>{itema.post}</div>
                                            <div><span className="iconfont">&#xe621;</span>{itema.username}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default App