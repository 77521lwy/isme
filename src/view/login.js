import logo from '../images/logo.png'
import banner from '../images/banner.png'
import axios from 'axios'
import './login.css'
import { useState } from 'react'


function Login(props){
    if(localStorage.val){
        props.history.push('/app')
    }
    const [json,setjson] = useState({username:'',password:''})
    function gteval(event){
        let dom = event.target
        let type = dom.getAttribute('type')
        let val = dom.value.split(' ').join('')
        let newjson = {...json}
        newjson[type] = val
        setjson(newjson)
    }
    function btn(){
        ctn()
        if(json.username === ''||json.password ===''){
            // alert('请输入内容')
        }else{
            axios.post('http://crm.cimns.com/index.php/admin/base/login',json)
            .then((data)=>{
                if(data.data.code === 200){
                    window.localStorage.val = JSON.stringify(data.data.data)
                    props.history.push('/app')
                }else if(data.data.code === 400){
                    alert('登录失败')
                }
            })
        }
    }
    const [none,setnone] = useState ({display:'none'})
    const [none2,setnone2] = useState ({display:'none'})
    function ctn(){
                if(json.username === ''){
                    setnone({display:'block'})
                }
                if(json.password === ''){
                    setnone2({display:'block'})
                }
            }
    return(
        <div className="login_box">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="contenta">
                <div className="left_login">
                    <img src={banner} alt="banner"></img>
                </div>
                <div className="right_login">
                    <h3>悟空CRM</h3>
                    <div className="username">
                        <input type="username" value={json.username} onChange={gteval} placeholder="请输入用户名"></input>
                        <p style={none}>请输入账号</p>
                    </div>
                    <div className="password">
                        <input type="password" value={json.password} onChange={gteval} placeholder="请输入密码"></input>
                        <p style={none2}>请输入密码</p>
                    </div>
                    <div className="login_btn" onClick={btn}>登录</div>
                    <div className="somltxt">
                        <p>悟空CRM受国家计算机软件著作权保护，未经授权不得进行商业行为，违者必究。</p>
                        <p>©2019 悟空CRM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login